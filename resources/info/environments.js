ResourcePackInfo_Environments = {};
var RPI = ResourcePackInfo_Environments;
var Path = "textures/environment/";
var SelectedX = 64;
var SelectedY = 64;

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

SelectedTexture = "planets"; /* ======================================== */
ADD("moon"       ,0,0);
ADD("moon_phases",0,0,4,2);

ADD("sun"        ,0,2);

SelectedTexture = "precipitation"; /* ======================================== */
SelectedX = 32;
SelectedY = 128;
ADD("rain",0,0);
ADD("snow",1,0);

SelectedTexture = "vanilla_colormaps"; /* ======================================== */
SelectedX = 256;
SelectedY = 256;
ADD("colormap_foliage",0,0);
ADD("colormap_grass"  ,1,0);

ADD("colormap_water"  ,0,1);

SelectedTexture = "clouds"; /* ======================================== */
ADD("clouds",0,0);

SelectedTexture = "other"; /* ======================================== */
ADD("endportal",0,0);