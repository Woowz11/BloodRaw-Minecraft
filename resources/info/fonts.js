ResourcePackInfo_Fonts = {};
var RPI = ResourcePackInfo_Fonts;
var Path = "textures/font/";
var SelectedX = 128;
var SelectedY = 128;

var SelectedTexture = "";
var n = null;

function ADD(Name,x,y,w,h,Extra){
	if(Name==""){return;}
	if(Extra==null){Extra = {};}
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

SelectedTexture = "font"; /* ======================================== */
ADD("ascii",0,0);