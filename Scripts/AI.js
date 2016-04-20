var Player : Transform;
var MoveSpeed = 5;
var MinDist = 15;
var MaxDist = 2;
var ani : Animation ;
var health : pHealth;

function Start()
{
	ani.enabled = false;
}
function Awake()
{
	health = Player.GetComponent (pHealth);
}
function Update ()
{
	transform.LookAt (Player);
	if(Vector3.Distance(transform.position,Player.position ) < MinDist) 
	{
		ani.enabled = true;
		transform.position += transform.forward * MoveSpeed*Time.deltaTime;
		
		if(Vector3.Distance(transform.position,Player.position) <= MaxDist)
		{
			health.damage();
			Destroy(this.gameObject);
		}
	}
}


