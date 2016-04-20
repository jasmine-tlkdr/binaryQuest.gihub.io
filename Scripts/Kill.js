var bullet : Transform;
var weapon: boolean = false;
var Kill : boolean = false;

function Start(){
//	Cursor.visible = true;
}

function Update()
{
	if (Input.GetKeyUp("f") && Kill) 
	{
		var bulletfire = Instantiate (bullet, gameObject.Find("hand").transform.position, Quaternion.identity);
		bulletfire.GetComponent.<Rigidbody>().AddForce(transform.forward * 1000); 
	}
}
