var display = document.getElementById('display');
var inputExpression = "";

function clearDisplay() 
{
  display.innerText = '0';
  inputExpression = "";
}

function deleteDigit() 
{
  if (inputExpression.length > 0) 
  {
    inputExpression = inputExpression.slice(0, -1);
    display.innerText = inputExpression;
  } 
  else 
  {
    clearDisplay();
  }
}

function appendOperator(operator) 
{
  inputExpression += operator;
  display.innerText = inputExpression;
}

function appendDigit(digit) 
{
  inputExpression += digit;
  display.innerText = inputExpression;
}

function appendDecimal() 
{
  if (inputExpression.indexOf('.') === -1) 
  {
    inputExpression += '.';
    display.innerText = inputExpression;
  }
}

function calculateResult() 
{
  if (inputExpression !== "") 
  {
    try 
    {
      var result = eval(inputExpression);
      display.innerText = result;
      inputExpression = result.toString();
    } 
    catch (error) 
    {
      display.innerText = 'Invalid error';
      inputExpression = "";
    }
  }
}
