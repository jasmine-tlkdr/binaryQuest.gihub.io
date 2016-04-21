var bullet : Transform;
var weapon: boolean = false;
var Kill : boolean = false;

function Start(){
}

function Update()
{
	if (Input.GetKeyUp("f") && Kill)	//if f key is pressed and player has a weapon
	{
		var bulletfire = Instantiate (bullet, gameObject.Find("hand").transform.position, Quaternion.identity);
		bulletfire.GetComponent.<Rigidbody>().AddForce(transform.forward * 1000);
	}
}
