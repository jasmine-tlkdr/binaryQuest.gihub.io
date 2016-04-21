#pragma strict

function OnCollisionStay(other : Collision)
{
	if(other.gameObject.name == "Bullet(Clone)")	//if a bullet hits an enemy
	{
		Destroy(other.gameObject);	//destroy eney and bullet
 		Destroy(gameObject);
	}
}
