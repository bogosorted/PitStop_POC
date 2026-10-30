"""
SQLite Infrastructure Adapter (`SqliteCanteenRepository`).
Implements `InventoryManager` and `OrderRepository` defined in `domain/interfaces.py`.
Demonstrates the Dependency Inversion Principle (DIP): low-level database details depend on
high-level domain abstractions, never the reverse.
"""

import sqlite3
from datetime import datetime, timedelta
from typing import List, Optional, Dict, Any
from domain.entities import Product, Order, OrderItem
from domain.interfaces import InventoryManager, OrderRepository


class SqliteCanteenRepository(InventoryManager, OrderRepository):
    """Concrete SQLite adapter implementing the segregated domain interfaces."""

    def __init__(self, db_path: str) -> None:
        self._db_path = db_path
        self._initialize_schema_and_seed()

    def _connect(self) -> sqlite3.Connection:
        conn = sqlite3.connect(self._db_path)
        conn.row_factory = sqlite3.Row
        return conn

    def _initialize_schema_and_seed(self) -> None:
        with self._connect() as conn:
            cursor = conn.cursor()
            cursor.executescript(
                """
                CREATE TABLE IF NOT EXISTS products (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    category TEXT NOT NULL,
                    price REAL NOT NULL,
                    prep_time_min INTEGER NOT NULL,
                    stock INTEGER NOT NULL,
                    image_url TEXT NOT NULL DEFAULT '/static/images/coxinha.jpg',
                    badge TEXT DEFAULT '',
                    description TEXT DEFAULT '',
                    ingredients TEXT DEFAULT ''
                );

                CREATE TABLE IF NOT EXISTS orders (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    ticket_code TEXT NOT NULL,
                    student_name TEXT NOT NULL,
                    pickup_location TEXT NOT NULL,
                    time_slot TEXT NOT NULL,
                    payment_method TEXT NOT NULL,
                    subtotal REAL NOT NULL,
                    final_amount REAL NOT NULL,
                    discount_amount REAL NOT NULL,
                    status TEXT NOT NULL,
                    created_at TEXT NOT NULL,
                    updated_at TEXT NOT NULL,
                    estimated_wait_min INTEGER NOT NULL,
                    call_count INTEGER NOT NULL DEFAULT 0,
                    was_delayed INTEGER NOT NULL DEFAULT 0
                );

                CREATE TABLE IF NOT EXISTS order_items (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    order_id INTEGER NOT NULL,
                    product_id INTEGER NOT NULL,
                    product_name TEXT NOT NULL,
                    quantity INTEGER NOT NULL,
                    unit_price REAL NOT NULL,
                    prep_time_min INTEGER NOT NULL,
                    image_url TEXT NOT NULL DEFAULT '/static/images/coxinha.jpg',
                    FOREIGN KEY(order_id) REFERENCES orders(id)
                );

                CREATE TABLE IF NOT EXISTS hourly_demand (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    time_slot TEXT UNIQUE NOT NULL,
                    label TEXT NOT NULL,
                    forecast_orders INTEGER NOT NULL,
                    actual_orders INTEGER NOT NULL
                );
                """
            )

            try:
                cursor.execute("ALTER TABLE orders ADD COLUMN call_count INTEGER NOT NULL DEFAULT 0")
            except sqlite3.OperationalError:
                pass

            try:
                cursor.execute("ALTER TABLE orders ADD COLUMN was_delayed INTEGER NOT NULL DEFAULT 0")
            except sqlite3.OperationalError:
                pass

            try:
                cursor.execute("ALTER TABLE products ADD COLUMN description TEXT DEFAULT ''")
            except sqlite3.OperationalError:
                pass

            try:
                cursor.execute("ALTER TABLE products ADD COLUMN ingredients TEXT DEFAULT ''")
            except sqlite3.OperationalError:
                pass

            product_count = cursor.execute(
                "SELECT COUNT(*) FROM products"
            ).fetchone()[0]
            if product_count == 0:
                self._seed_initial_data(cursor)
            conn.commit()

    def _seed_initial_data(self, cursor: sqlite3.Cursor) -> None:
        initial_products = [
            (
                "Coxinha de Frango com Catupiry Artesanal",
                "Salgados & Forno",
                8.50,
                3,
                14,
                "/static/images/coxinha.jpg",
                "Crocante na Estufa",
                "Massa artesanal de batata e caldo de frango, recheada com peito de frango desfiado temperado com ervas e Catupiry legítimo.",
                "Peito de frango, Catupiry original, farinha de trigo, batata, alho, cebola, cheiro-verde, especiarias.",
            ),
            (
                "Risole de Presunto e Queijo",
                "Salgados & Forno",
                8.50,
                3,
                12,
                "/static/images/risole.jpg",
                "Massa Leve & Recheado",
                "Massa macia e dourada com casquinha crocante, recheada com presunto magro e queijo mussarela derretido.",
                "Presunto, queijo mussarela, farinha de trigo, leite integral, manteiga, orégano, sal.",
            ),
            (
                "Pão de Queijo",
                "Salgados & Forno",
                5.50,
                2,
                22,
                "/static/images/pao_de_queijo.jpg",
                "Fornada Quentinha",
                "Pão de queijo quentinho com queijo canastra curado, casquinha dourada crocante e miolo macio e elástico.",
                "Polvilho doce e azedo, queijo canastra meia cura, leite integral, ovos, manteiga, sal.",
            ),
            (
                "Croissant Francês Folhado",
                "Salgados & Forno",
                11.90,
                4,
                8,
                "/static/images/croissant.jpg",
                "Manteiga Especial",
                "Folhado clássico leve e crocante preparado com dobras manuais de manteiga de primeira linha.",
                "Farinha de trigo especial, manteiga sem sal, açúcar cristal, leite, fermento biológico, sal.",
            ),
            (
                "Água Mineral 500ml",
                "Bebidas",
                4.00,
                1,
                30,
                "/static/images/agua_mineral.jpg",
                "Gelada",
                "Água mineral natural sem gás, límpida e fresca, servida gelada no balcão.",
                "100% Água mineral natural de fonte.",
            ),
            (
                "Fatia de Bolo de Chocolate Belga",
                "Doces & Bolos",
                9.50,
                2,
                9,
                "/static/images/bolo_chocolate.jpg",
                "Cobertura Cremosa",
                "Massa úmida de cacau intenso 70% com recheio trufado e generosa cobertura de ganache de chocolate belga.",
                "Cacau em pó 70%, chocolate belga meio amargo, farinha de trigo, ovos, manteiga, açúcar demerara.",
            ),
            (
                "Fatia de Bolo de Cenoura com Chocolate",
                "Doces & Bolos",
                8.50,
                2,
                14,
                "/static/images/bolo_cenoura.jpg",
                "Artesanal",
                "O clássico bolo fofinho e dourado feito com cenouras frescas raladas e calda crocante de chocolate meio amargo.",
                "Cenoura fresca, farinha de trigo, ovos, óleo de girassol, açúcar, cacau em pó 50%, leite.",
            ),
            (
                "Fatia de Bolo Red Velvet",
                "Doces & Bolos",
                9.50,
                2,
                10,
                "/static/images/bolo_red_velvet.jpg",
                "Especial",
                "Massa aveludada vermelha com notas suaves de cacau e baunilha, recheada com autêntico cream cheese frosting.",
                "Farinha de trigo, cream cheese, manteiga sem sal, cacau em pó, extrato de baunilha, açúcar de confeiteiro.",
            ),
            (
                "Coca-Cola Zero 350ml (Lata Gelada)",
                "Bebidas",
                6.00,
                1,
                18,
                "/static/images/coca_zero.jpg",
                "Super Gelada",
                "Refrigerante de cola sem calorias e sem açúcar, servido na temperatura ideal.",
                "Água gaseificada, extrato de noz de cola, cafeína, edulcorantes artificiais.",
            ),
            (
                "Suco Natural de Laranja 350ml",
                "Bebidas",
                8.00,
                2,
                12,
                "/static/images/suco_laranja.jpg",
                "100% Integral",
                "Suco espremido na hora com laranjas-pera selecionadas, sem adição de açúcar, conservantes ou água.",
                "100% Suco de laranja natural in natura.",
            ),
            (
                "Café Expresso Especial CESAR",
                "Bebidas",
                5.00,
                2,
                28,
                "/static/images/cafe_expresso.jpg",
                "Grão Moído na Hora",
                "Expresso curto com crema aveludada, grãos 100% arábica cultivados em altitude com notas de caramelo e avelã.",
                "Grãos selecionados de café 100% arábica.",
            ),
        ]
        cursor.executemany(
            """
            INSERT INTO products (name, category, price, prep_time_min, stock, image_url, badge, description, ingredients)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            initial_products,
        )

        hourly_slots = [
            ("08:00", "08:00 · Entrada", 8, 9),
            ("09:45", "09:45 · Intervalo Manhã (Pico)", 28, 24),
            ("11:30", "11:30 · Pré-Almoço", 12, 11),
            ("14:00", "14:00 · Retorno Tarde", 10, 11),
            ("15:45", "15:45 · Intervalo Tarde (Pico)", 32, 21),
            ("18:30", "18:30 · Noturno / Pós", 18, 6),
        ]
        cursor.executemany(
            """
            INSERT INTO hourly_demand (time_slot, label, forecast_orders, actual_orders)
            VALUES (?, ?, ?, ?)
            """,
            hourly_slots,
        )

        now = datetime.now()
        t_minus_9 = (now - timedelta(minutes=9)).isoformat(timespec="seconds")
        t_minus_5 = (now - timedelta(minutes=5)).isoformat(timespec="seconds")
        t_minus_2 = (now - timedelta(minutes=2)).isoformat(timespec="seconds")
        t_minus_18 = (now - timedelta(minutes=18)).isoformat(timespec="seconds")
        t_minus_25 = (now - timedelta(minutes=25)).isoformat(timespec="seconds")

        seed_orders = [
            (
                "PS-101",
                "Marina Costa (Design)",
                "APOLO",
                "09:45",
                "Saldo PitStop CESAR (5% OFF)",
                17.00,
                16.15,
                0.85,
                "DELIVERED",
                t_minus_25,
                t_minus_18,
                3,
                [(1, "Coxinha de Frango com Catupiry Artesanal", 2, 8.50, 3, "/static/images/coxinha.jpg")],
            ),
            (
                "PS-102",
                "Lucas Menezes (CC)",
                "BRUM",
                "09:45",
                "Pix Express (QR Code)",
                14.00,
                14.00,
                0.00,
                "DELIVERED",
                t_minus_18,
                t_minus_9,
                3,
                [
                    (3, "Pão de Queijo Tradicional Mineiro", 1, 5.50, 2, "/static/images/pao_de_queijo.jpg"),
                    (2, "Risole de Presunto e Queijo", 1, 8.50, 3, "/static/images/risole.jpg"),
                ],
            ),
            (
                "PS-103",
                "Beatriz Melo (Eng. Soft)",
                "TIRADENTES",
                "15:45",
                "Pix Express (QR Code)",
                14.50,
                14.50,
                0.00,
                "READY",
                t_minus_9,
                t_minus_2,
                3,
                [
                    (1, "Coxinha de Frango com Catupiry Artesanal", 1, 8.50, 3, "/static/images/coxinha.jpg"),
                    (7, "Coca-Cola Zero 350ml (Lata Gelada)", 1, 6.00, 1, "/static/images/coca_zero.jpg"),
                ],
            ),
            (
                "PS-104",
                "Rafael Albuquerque",
                "APOLO",
                "15:45",
                "Saldo PitStop CESAR (5% OFF)",
                20.40,
                19.38,
                1.02,
                "PREPARING",
                t_minus_9,
                t_minus_5,
                4,
                [
                    (2, "Risole de Presunto e Queijo", 1, 8.50, 3, "/static/images/risole.jpg"),
                    (4, "Croissant Francês Folhado", 1, 11.90, 4, "/static/images/croissant.jpg"),
                ],
            ),
            (
                "PS-105",
                "Camila Rocha (IA)",
                "BRUM",
                "15:45",
                "Pix Express (QR Code)",
                9.00,
                9.00,
                0.00,
                "QUEUED",
                t_minus_2,
                t_minus_2,
                3,
                [
                    (5, "Água Mineral 500ml", 1, 4.00, 1, "/static/images/agua_mineral.jpg"),
                    (9, "Café Expresso Especial CESAR", 1, 5.00, 2, "/static/images/cafe_expresso.jpg"),
                ],
            ),
        ]

        for (
            ticket,
            student,
            loc,
            slot,
            pay,
            sub,
            final,
            disc,
            st,
            c_at,
            u_at,
            est,
            items,
        ) in seed_orders:
            cursor.execute(
                """
                INSERT INTO orders (
                    ticket_code, student_name, pickup_location, time_slot, payment_method,
                    subtotal, final_amount, discount_amount, status, created_at, updated_at, estimated_wait_min
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (ticket, student, loc, slot, pay, sub, final, disc, st, c_at, u_at, est),
            )
            oid = cursor.lastrowid
            for pid, pname, qty, uprice, ptime, img in items:
                cursor.execute(
                    """
                    INSERT INTO order_items (
                        order_id, product_id, product_name, quantity, unit_price, prep_time_min, image_url
                    ) VALUES (?, ?, ?, ?, ?, ?, ?)
                    """,
                    (oid, pid, pname, qty, uprice, ptime, img),
                )

    def reset_demo_database(self) -> None:
        with self._connect() as conn:
            cursor = conn.cursor()
            cursor.executescript(
                """
                DELETE FROM order_items;
                DELETE FROM orders;
                DELETE FROM products;
                DELETE FROM hourly_demand;
                """
            )
            self._seed_initial_data(cursor)
            conn.commit()

    def list_products(self) -> List[Product]:
        with self._connect() as conn:
            rows = conn.execute(
                "SELECT * FROM products ORDER BY id ASC"
            ).fetchall()
            return [self._row_to_product(r) for r in rows]

    def find_product(self, product_id: int) -> Optional[Product]:
        with self._connect() as conn:
            row = conn.execute(
                "SELECT * FROM products WHERE id = ?", (product_id,)
            ).fetchone()
            return self._row_to_product(row) if row else None

    def create_product(
        self,
        name: str,
        category: str,
        price: float,
        prep_time_min: int,
        stock: int,
        image_url: str = "/static/images/coxinha.jpg",
        badge: str = "",
        description: str = "",
        ingredients: str = "",
    ) -> Product:
        temp_product = Product(
            product_id=0,
            name=name,
            category=category,
            price=price,
            prep_time_min=prep_time_min,
            stock=stock,
            image_url=image_url,
            badge=badge,
            description=description,
            ingredients=ingredients,
        )
        with self._connect() as conn:
            cursor = conn.cursor()
            cursor.execute(
                """
                INSERT INTO products (name, category, price, prep_time_min, stock, image_url, badge, description, ingredients)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    temp_product.name,
                    temp_product.category,
                    temp_product.price,
                    temp_product.prep_time_min,
                    temp_product.stock,
                    temp_product.image_url,
                    badge,
                    description,
                    ingredients,
                ),
            )
            new_id = cursor.lastrowid
            conn.commit()
        return self.find_product(int(new_id))  # type: ignore

    def save_stock(self, product_id: int, new_stock: int) -> Product:
        product = self.find_product(product_id)
        if not product:
            raise ValueError(f"Produto #{product_id} não encontrado.")
        product.update_stock(new_stock)
        with self._connect() as conn:
            conn.execute(
                "UPDATE products SET stock = ? WHERE id = ?",
                (product.stock, product_id),
            )
            conn.commit()
        return product

    def save_order(self, order: Order) -> Order:
        snapshot = order.to_dict(datetime.now())
        with self._connect() as conn:
            cursor = conn.cursor()
            cursor.execute(
                """
                INSERT INTO orders (
                    ticket_code, student_name, pickup_location, time_slot, payment_method,
                    subtotal, final_amount, discount_amount, status, created_at, updated_at, estimated_wait_min,
                    call_count, was_delayed
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    snapshot["ticket_code"],
                    snapshot["student_name"],
                    snapshot["pickup_location"],
                    snapshot["time_slot"],
                    snapshot["payment_method"],
                    snapshot["subtotal"],
                    snapshot["final_amount"],
                    snapshot["discount_amount"],
                    snapshot["status"],
                    snapshot["created_at"],
                    snapshot["updated_at"],
                    snapshot["estimated_wait_min"],
                    snapshot.get("call_count", 0),
                    1 if snapshot.get("was_delayed") else 0,
                ),
            )
            new_order_id = int(cursor.lastrowid)
            for item in snapshot["items"]:
                cursor.execute(
                    """
                    INSERT INTO order_items (
                        order_id, product_id, product_name, quantity, unit_price, prep_time_min, image_url
                    ) VALUES (?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        new_order_id,
                        item["product_id"],
                        item["product_name"],
                        item["quantity"],
                        item["unit_price"],
                        item["prep_time_min"],
                        item["image_url"],
                    ),
                )
            conn.commit()
        return self.find_order(new_order_id)  # type: ignore

    def list_orders(self) -> List[Order]:
        with self._connect() as conn:
            order_rows = conn.execute(
                "SELECT * FROM orders ORDER BY id DESC"
            ).fetchall()
            result: List[Order] = []
            for o_row in order_rows:
                item_rows = conn.execute(
                    "SELECT * FROM order_items WHERE order_id = ?", (o_row["id"],)
                ).fetchall()
                result.append(self._row_to_order(o_row, item_rows))
            return result

    def find_order(self, order_id: int) -> Optional[Order]:
        with self._connect() as conn:
            o_row = conn.execute(
                "SELECT * FROM orders WHERE id = ?", (order_id,)
            ).fetchone()
            if not o_row:
                return None
            item_rows = conn.execute(
                "SELECT * FROM order_items WHERE order_id = ?", (order_id,)
            ).fetchall()
            return self._row_to_order(o_row, item_rows)

    def update_order_status(
        self, order_id: int, new_status: str, updated_at: str
    ) -> Order:
        order = self.find_order(order_id)
        was_delayed = 1 if (order and (order.was_delayed or order.is_delayed(datetime.now()))) else 0
        with self._connect() as conn:
            conn.execute(
                "UPDATE orders SET status = ?, updated_at = ?, was_delayed = MAX(was_delayed, ?) WHERE id = ?",
                (new_status, updated_at, was_delayed, order_id),
            )
            conn.commit()
        return self.find_order(order_id)  # type: ignore

    def re_notify_order(self, order_id: int) -> Order:
        with self._connect() as conn:
            conn.execute(
                """
                UPDATE orders
                SET call_count = call_count + 1, updated_at = ?
                WHERE id = ?
                """,
                (datetime.now().isoformat(timespec="seconds"), order_id),
            )
            conn.commit()
        return self.find_order(order_id)  # type: ignore

    def get_hourly_demand(self) -> List[Dict[str, Any]]:
        with self._connect() as conn:
            rows = conn.execute(
                "SELECT * FROM hourly_demand ORDER BY id ASC"
            ).fetchall()
            return [
                {
                    "time_slot": r["time_slot"],
                    "label": r["label"],
                    "forecast_orders": r["forecast_orders"],
                    "actual_orders": r["actual_orders"],
                }
                for r in rows
            ]

    def increment_hourly_actual(self, time_slot: str) -> None:
        with self._connect() as conn:
            conn.execute(
                """
                UPDATE hourly_demand
                SET actual_orders = actual_orders + 1
                WHERE time_slot = ?
                """,
                (time_slot,),
            )
            conn.commit()

    @staticmethod
    def _row_to_product(row: sqlite3.Row) -> Product:
        keys = row.keys()
        return Product(
            product_id=row["id"],
            name=row["name"],
            category=row["category"],
            price=row["price"],
            prep_time_min=row["prep_time_min"],
            stock=row["stock"],
            image_url=row["image_url"] if "image_url" in keys else "/static/images/coxinha.jpg",
            badge=row["badge"] or "",
            description=row["description"] if "description" in keys else "",
            ingredients=row["ingredients"] if "ingredients" in keys else "",
        )

    @staticmethod
    def _row_to_order(
        order_row: sqlite3.Row, item_rows: List[sqlite3.Row]
    ) -> Order:
        items = [
            OrderItem(
                product_id=ir["product_id"],
                product_name=ir["product_name"],
                quantity=ir["quantity"],
                unit_price=ir["unit_price"],
                prep_time_min=ir["prep_time_min"],
                image_url=ir["image_url"] if "image_url" in ir.keys() else "/static/images/coxinha.jpg",
            )
            for ir in item_rows
        ]
        keys = order_row.keys()
        return Order(
            order_id=order_row["id"],
            ticket_code=order_row["ticket_code"],
            student_name=order_row["student_name"],
            pickup_location=order_row["pickup_location"],
            time_slot=order_row["time_slot"],
            payment_method=order_row["payment_method"],
            items=items,
            subtotal=order_row["subtotal"],
            final_amount=order_row["final_amount"],
            discount_amount=order_row["discount_amount"],
            status=order_row["status"],
            created_at=order_row["created_at"],
            updated_at=order_row["updated_at"],
            estimated_wait_min=order_row["estimated_wait_min"],
            call_count=order_row["call_count"] if "call_count" in keys else 0,
            was_delayed=bool(order_row["was_delayed"]) if "was_delayed" in keys else False,
        )
