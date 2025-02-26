import pytest
from src import calculator

def test_add():
    assert calculator.add(5,3) == 8
    assert calculator.subtract(5,3) == 2
    assert calculator.multiply(5,3) == 15
    assert calculator.divide(15,3) == 5