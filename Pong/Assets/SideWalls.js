#pragma strict

function OnTriggerEnter2D (hitInfo : Collider2D) 
{
	if (hitInfo.name.Equals("Ball"))
	{
		var wallName = transform.name;
		GameManager.Score(wallName);
		transform.audio.Play();
		hitInfo.gameObject.SendMessage("ResetBall");
	}
}