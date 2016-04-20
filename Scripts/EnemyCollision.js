#pragma strict

function OnCollisionStay(other : Collision)
{
	if(other.gameObject.name == "Bullet(Clone)")
	{
		Destroy(other.gameObject);
 		Destroy(gameObject);
	} 
}