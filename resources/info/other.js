ResourcePackInfo_Other = {};
var RPI = ResourcePackInfo_Other;
var Path = "textures/other/";
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

SelectedTexture = "other"; /* ======================================== */
ADD("empty"   ,0,0);
ADD("notfound",1,0);

SelectedTexture = "clocks"; /* ======================================== */
ADD("dial",0,0);

SelectedTexture = "panorama_mainmenu"; /* ======================================== */
SelectedX = 512;
SelectedY = 512;
ADD("panorama_mainmenu_0",0,0);
ADD("panorama_mainmenu_1",1,0);
ADD("panorama_mainmenu_2",2,0);
ADD("panorama_mainmenu_3",3,0);
ADD("panorama_mainmenu_4",4,0);
ADD("panorama_mainmenu_5",5,0);

SelectedTexture = "vignette"; /* ======================================== */
SelectedX = 256;
SelectedY = 256;
ADD("vignette",0,0);

SelectedTexture = "sky_end"; /* ======================================== */
SelectedX = 128;
SelectedY = 128;
ADD("sky_end",0,0);

SelectedTexture = "enchantments"; /* ======================================== */
ADD("enchant",0,0);