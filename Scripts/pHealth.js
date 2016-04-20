var Zombie : Transform;
var MaxDist = 3;
var full_health: float = 100f;
var curr_health: float = 100f;
var healthBar : Transform;
var loser : GameObject;

function Start()
{
	curr_health = full_health;
	loser.gameObject.SetActive(false);
}

function damage()
{
	var calcHealth:float;
	if(curr_health > 5){
		curr_health -= 5f;
		calcHealth = curr_health / full_health;
		adjustHealthBar (calcHealth);
	}
	else{
		curr_health -= 5f;
		calcHealth = curr_health / full_health;
		adjustHealthBar (calcHealth);
		loser.gameObject.SetActive(true);
	}
}

function adjustHealthBar(pHealth:float)
{
		healthBar.transform.localScale = new Vector3(pHealth,healthBar.transform.localScale.y, healthBar.transform.localScale.z);
}