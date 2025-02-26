ResourcePackInfo_Gradients = {};
var RPI = ResourcePackInfo_Gradients;
var Path = "textures/gradients/";
var SelectedX = 255;
var SelectedY = 1;

var SelectedTexture = "";
var n = null;

function ADD(Name,x,y,w,h,Extra,Info){
	if(Name==""){return;}
	if(Extra==null){Extra = [];}
	if(Info==null){Info = {};}
	if(x!=null&&y!=null){if(w==null){w=1;}if(h==null){h=1;}}
	if(x!=null){x *= SelectedX;} if(y!=null){y *= SelectedY;} if(w!=null){w *= SelectedX;} if(h!=null){h *= SelectedY;}
	var Result = {
		"Name" : Name,
		"Extra": Extra,
		"Info" : Info,
		"Texture": {
			"Path": Path+SelectedTexture+".png",
			"x": x,
			"y": y,
			"w": w,
			"h": h
		}
	};
	RPI[Name] = Result;
}

/* ================================================================================================================================================================================ */

SelectedTexture = "basegradients"; /* ======================================== */
ADD("water"      ,0,0);
ADD("redstone"   ,0,1);
ADD("redstone_on",0,2);
ADD("leather"    ,0,4);

SelectedTexture = "other"; /* ======================================== */
ADD("rainbow"  ,0,0);
ADD("alpha"    ,0,1);
ADD("grayscale",0,2);
ADD("waves"    ,0,3);
ADD("random"   ,0,4);
ADD("dots"     ,0,5);
ADD("white"    ,0,6);
ADD("2colors"  ,0,7);
ADD("4colors"  ,0,8);
ADD("8colors"  ,0,9);