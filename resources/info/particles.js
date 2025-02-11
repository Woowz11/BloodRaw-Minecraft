ResourcePackInfo_Particles = {};
var RPI = ResourcePackInfo_Particles;
var Path = "textures/particles/";
var SelectedX = 16;
var SelectedY = 16;

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

SelectedTexture = "beams"; /* ======================================== */
ADD("beam"           ,0,0);
ADD("beam_gateway"   ,0,1);
ADD("beam_guardian"  ,0,2);
ADD("beam_endcrystal",0,3,1,16);

SelectedTexture = "shadows"; /* ======================================== */
ADD("shadow",0,0);

SelectedTexture = "leads"; /* ======================================== */
SelectedX = 32;
SelectedY = 32;
ADD("lead",0,0);

SelectedTexture = "xp"; /* ======================================== */
ADD("xp",0,0);

SelectedTexture = "books"; /* ======================================== */
SelectedX = 64;
ADD("book",0,0);

SelectedTexture = "sweep"; /* ======================================== */
SelectedX = 128;
ADD("sweep",0,0);

SelectedTexture = "explosions"; /* ======================================== */
SelectedY = 128;
ADD("explosion",0,0);