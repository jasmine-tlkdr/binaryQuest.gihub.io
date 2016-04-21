var scrolls : int = 0;
var StartTexture : GameObject;
var PaperTexture : GameObject;
var GameOver : GameObject;
var CanPickUp : boolean = false;
var killEnemy : Kill;
var instruct : String = "";

private var read : ReadPaper;

function Start () {
	read = FindObjectOfType(ReadPaper);
	killEnemy = FindObjectOfType(Kill);
	StartTexture.gameObject.SetActive(true);
	PaperTexture.gameObject.SetActive(false);
	GameOver.gameObject.SetActive(false);
}

function Update()
{
	if(CanPickUp){
		if (Input.GetKeyUp("x")) {
			PaperTexture.gameObject.SetActive(false);
		}
		else if(Input.GetKeyUp("i")){ //if i key pressed, view scroll collected
			PaperTexture.gameObject.SetActive(true);
		}
	}else{
		if (Input.GetKeyUp("x")) {
			StartTexture.gameObject.SetActive(false);
		}
	}
}
function OnTriggerEnter ( other: Collider)
{
	if(other.gameObject.tag == "weapon") //if player has a weapon
	{
		killEnemy.Kill = true;            //player can kill enemies
		Destroy(other.gameObject);
	}
	if(other.gameObject.tag == "scroll")
	{
		scrolls += 1;
		Destroy(other.gameObject);
		CanPickUp = true;
	}
	if(other.gameObject.tag == "end")
	{
		GameOver.gameObject.SetActive(true);
	}
}

function OnGUI ()
{
	if(CanPickUp){
 		if(GUI.Button(Rect(10,10,20,20), "X"))
        {
      	  CanPickUp = false;
        }
	}
}
