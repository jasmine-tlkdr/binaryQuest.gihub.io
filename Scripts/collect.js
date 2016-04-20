var scrolls : int = 0;
var StartTexture : GameObject;
var PaperTexture : GameObject;
//var Paper2Texture : GameObject;
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
//	Paper2Texture.gameObject.SetActive(false);
	GameOver.gameObject.SetActive(false);
}
 
function Update()
{
	if(CanPickUp){
		if (Input.GetKeyUp("x")) {
			PaperTexture.gameObject.SetActive(false);
		}
		else if(Input.GetKeyUp("i")){
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
	if(other.gameObject.tag == "weapon")
	{
		killEnemy.Kill = true;
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
//	if(other.gameObject.tag == "game_over"){
//		GameOver.gameObject.SetActive(true);
//	}	
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