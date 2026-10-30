"""
Chapter 5 Design Principles applied in this module:
1. Open/Closed Principle (OCP):
   - Billing and discount calculation is closed for modification inside `OrderService`,
     but open for extension by adding new subclasses of `PaymentStrategy`.
2. Liskov Substitution Principle (LSP):
   - Every `PaymentStrategy` implementation honors the base contract postcondition:
     `0 <= calculate_final_amount(subtotal) <= subtotal`.
3. Favor Composition over Inheritance:
   - `SmartQueueCalculator` is injected as a collaborator into domain services.
"""

from typing import Dict, List
from domain.entities import Order
from domain.interfaces import PaymentStrategy, QueueSlaCalculator


class InstantPixPayment(PaymentStrategy):
    def code(self) -> str:
        return "PIX"

    def display_name(self) -> str:
        return "Pix"

    def short_description(self) -> str:
        return "QR Code instantâneo"

    def calculate_final_amount(self, subtotal: float) -> float:
        return round(max(0.0, subtotal), 2)


class PayOnPickupPayment(PaymentStrategy):
    def code(self) -> str:
        return "BALCAO"

    def display_name(self) -> str:
        return "Pagar na Hora"

    def short_description(self) -> str:
        return "Cartão ou Dinheiro no balcão ao retirar"

    def calculate_final_amount(self, subtotal: float) -> float:
        return round(max(0.0, subtotal), 2)


class ContactlessCardPayment(PaymentStrategy):
    def code(self) -> str:
        return "CARD"

    def display_name(self) -> str:
        return "Cartão / Apple & Google Pay"

    def short_description(self) -> str:
        return "Crédito ou Débito por aproximação"

    def calculate_final_amount(self, subtotal: float) -> float:
        return round(max(0.0, subtotal), 2)


class PitStopWalletPayment(PaymentStrategy):
    """Grants a 5% discount for students using pre-loaded PitStop balance to speed up the 15-min break."""

    def code(self) -> str:
        return "PITSTOP_WALLET"

    def display_name(self) -> str:
        return "Saldo PitStop CESAR (5% OFF)"

    def short_description(self) -> str:
        return "Débito automático da carteira do aluno com 5% de desconto"

    def calculate_final_amount(self, subtotal: float) -> float:
        return round(max(0.0, subtotal * 0.95), 2)


class ResidencyVoucherPayment(PaymentStrategy):
    """
    LIVE PROOF OF THE OPEN/CLOSED PRINCIPLE (OCP):
    Added by creating ONLY this new class and registering it in the strategy map,
    with ZERO modifications to `OrderService`!
    """

    def code(self) -> str:
        return "RESIDENCY_VOUCHER"

    def display_name(self) -> str:
        return "Voucher Monitoria / Residência (12% OFF)"

    def short_description(self) -> str:
        return "Benefício estudantil CESAR School"

    def calculate_final_amount(self, subtotal: float) -> float:
        return round(max(0.0, subtotal * 0.88), 2)


class SmartQueueCalculator(QueueSlaCalculator):
    """
    Estimates wait time by combining item preparation time with active kitchen workload
    divided across parallel bakery stations.
    """

    def __init__(self, parallel_stations: int = 3) -> None:
        self._stations = max(1, parallel_stations)

    def estimate_wait_minutes(
        self, active_orders: List[Order], items_prep_time_min: int
    ) -> int:
        queue_workload = sum(
            max(1, order.estimated_wait_min // 2)
            for order in active_orders
            if order.is_active_in_kitchen
        )
        queue_impact = queue_workload // self._stations
        return max(2, int(items_prep_time_min + queue_impact))


def build_payment_registry() -> Dict[str, PaymentStrategy]:
    strategies: List[PaymentStrategy] = [
        InstantPixPayment(),
        PayOnPickupPayment(),
        PitStopWalletPayment(),
        ContactlessCardPayment(),
        ResidencyVoucherPayment(),
    ]
    return {strategy.code(): strategy for strategy in strategies}
