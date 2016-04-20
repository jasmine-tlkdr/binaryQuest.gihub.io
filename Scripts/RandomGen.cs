using UnityEngine;
using System.Collections;

public class RandomGen : MonoBehaviour {

	float[] randPos = new float[] { 84.42f, 146.78f, 196.78f, 312.13f, 369.3f };
	Vector3 pos;
	public GameObject[] visibleList;
	public GameObject[] visibleList1;
	public GameObject[] visibleList2;
	public GameObject[] visibleList3;
	public GameObject[] visibleList4;
	void Start()
	{
		float x = randPos[Random.Range(0, 5)];
		float y = 0;
		float z = 344.2f;
		pos = new Vector3(x, y, z);
		transform.position = pos;
		int _p = (int)x;
		switch(_p)
		{
			case 84: // all animal invisible
				visibleList = GameObject.FindGameObjectsWithTag ("animals_5");
				visibleList1 = GameObject.FindGameObjectsWithTag ("animals_1");
				visibleList2 = GameObject.FindGameObjectsWithTag ("animals_2");
				visibleList3 = GameObject.FindGameObjectsWithTag ("animals_3");
				visibleList4 = GameObject.FindGameObjectsWithTag ("animals_4");
				setRender(visibleList);
				setRender(visibleList1);
				setRender(visibleList2);
				setRender(visibleList3);
				setRender(visibleList4);
				break;
			case 146:
				visibleList = GameObject.FindGameObjectsWithTag ("skull_5");
				visibleList1 = GameObject.FindGameObjectsWithTag ("animals_1");
				visibleList2 = GameObject.FindGameObjectsWithTag ("animals_2");
				visibleList3 = GameObject.FindGameObjectsWithTag ("animals_3");
				visibleList4 = GameObject.FindGameObjectsWithTag ("animals_4");
				setRender(visibleList);
				setRender(visibleList1);
				setRender(visibleList2);
				setRender(visibleList3);
				setRender(visibleList4);
				break;
			case 196:
				visibleList = GameObject.FindGameObjectsWithTag ("animals_3");
				visibleList1 = GameObject.FindGameObjectsWithTag ("animals_1");
				visibleList2 = GameObject.FindGameObjectsWithTag ("animals_2");
				visibleList3 = GameObject.FindGameObjectsWithTag ("skull_4");
				visibleList4 = GameObject.FindGameObjectsWithTag ("skull_5");
				setRender(visibleList);
				setRender(visibleList1);
				setRender(visibleList2);
				setRender(visibleList3);
				setRender(visibleList4);
				break;
			case 312: //make animals invisible
				visibleList = GameObject.FindGameObjectsWithTag ("animals_1");
				visibleList1 = GameObject.FindGameObjectsWithTag ("skull_3");
				visibleList2 = GameObject.FindGameObjectsWithTag ("skull_4");
				visibleList3 = GameObject.FindGameObjectsWithTag ("skull_5");
				visibleList4 = GameObject.FindGameObjectsWithTag ("skull_6");
				setRender(visibleList);
				setRender(visibleList1);
				setRender(visibleList2);
				setRender(visibleList3);
				setRender(visibleList4);
				break;
			default:	//
				visibleList = GameObject.FindGameObjectsWithTag ("skull_2");
				visibleList1 = GameObject.FindGameObjectsWithTag ("skull_3");
				visibleList2 = GameObject.FindGameObjectsWithTag ("skull_4");
				visibleList3 = GameObject.FindGameObjectsWithTag ("skull_5");
				visibleList4 = GameObject.FindGameObjectsWithTag ("skull_6");
				setRender(visibleList);
				setRender(visibleList1);
				setRender(visibleList2);
				setRender(visibleList3);
				setRender(visibleList4);
				break;
		}
	}
	void setRender(GameObject[] visible){
		foreach (GameObject child in visible)
		{
			child.GetComponentInChildren<Renderer>().enabled=false;
		}
	}
	// Update is called once per frame
	void Update () {
	
	}
}
