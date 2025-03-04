import pytest
from src import calculator

 
@pytest.mark.parametrize(
    "a,b, expected",
    [
        (1,2,3),
        (0,5,5),
        (-2,9,7),
        (5,-8,-3),
    ],
)
def test_add_parametrized (a,b, expected):
    assert calculator.add_wrong(a,b) == expected