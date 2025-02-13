ResourcePackInfo_Gradients = {};
var RPI = ResourcePackInfo_Gradients;
var Path = "textures/gradients/";
var SelectedX = 1;
var SelectedY = 1;

var SelectedTexture = "";
var n = null;

function ADD(Name,x,y,w,h,Extra){
	if(Name==""){return;}
	if(Extra==null){Extra = [];}
	if(x!=null&&y!=null){if(w==null){w=1;}if(h==null){h=1;}}
	if(x!=null){x *= SelectedX;} if(y!=null){y *= SelectedY;} if(w!=null){w *= SelectedX;} if(h!=null){h *= SelectedY;}
	var Result = {
		"Name": Name,
		"Extra": Extra,
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
ADD("water"      ,0,0,16,1);
ADD("redstone"   ,0,1,16,1);
ADD("redstone_on",0,2,16,1);

SelectedTexture = "other"; /* ======================================== */
ADD("rainbow"  ,0,0,255,1);
ADD("alpha"    ,0,1,255,1);
ADD("grayscale",0,2,255,1);
ADD("waves"    ,0,3,255,1);
ADD("random"   ,0,4,255,1);