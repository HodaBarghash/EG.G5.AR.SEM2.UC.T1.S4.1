function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6R6DkJLAhjO":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwA2V5xXZ2Xcr7R8K1wQ0D3fHsxUYOKT7V_TrmMTEDNpAmxSXB6xAZ9wajkzZHej_b2/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

