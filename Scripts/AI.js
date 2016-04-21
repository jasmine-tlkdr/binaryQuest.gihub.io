var MoveSpeed = 5;
var MinDist = 15;
var MaxDist = 2;
var ani : Animation ;
var health : pHealth;

function Start()
{	//Animation is disabled at the start of the game
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
	{// if the player's position is less than the minimum distance
		ani.enabled = true;	//enable animation
		transform.position += transform.forward * MoveSpeed*Time.deltaTime;

		if(Vector3.Distance(transform.position,Player.position) <= MaxDist){
			health.damage();	//Damage player's health
			Destroy(this.gameObject);
		}
	}
}
