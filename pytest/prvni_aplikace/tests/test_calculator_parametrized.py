import pytest
from src import calculator

 
@pytest.mark.parametrize(
    "a,b, expected",
    [
        (1,2,3),
        (0,5,0),
        (-2,9,-18),
        (5,-8,-40),
    ],
)

    
def test_mul_parametrized (a,b, expected):
    assert calculator.multiply(a,b) == expected