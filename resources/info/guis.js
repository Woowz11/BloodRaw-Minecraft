ResourcePackInfo_Guis = {};
var RPI = ResourcePackInfo_Guis;
var Path = "textures/gui/";
var SelectedX = 256;
var SelectedY = 256;

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

SelectedTexture = "loadingscreen"; /* ======================================== */
ADD("loadingscreen"      ,0,0);
ADD("loadingscreen_white",0,0,n,n,[["Invert",true]]);

SelectedTexture = "map"; /* ======================================== */
SelectedX = 64;
SelectedY = 64;
ADD("map"          ,0,0);
ADD("map_icons_old",0,1,0.5,0.5);

SelectedTexture = "title"; /* ======================================== */
ADD("title"        ,0,0,4,1);
ADD("realms"       ,0,1,3,1);
ADD("title_realms" ,0,0,4,1,[["Resize",192,64],["Overlay","realms"]]);
ADD("crash"        ,0,0,4,1,[["Resize",274,44]]);
ADD("title_line"   ,0,0,4,4,[["Clear"],["Overlay","title"]]);
ADD("title_default",0,0,4,4,[["Clear"],["Overlay","title"],["Overlay","title",-156,45],["Overlay","title_realms",0,92],["Clear",156,0,100,90]]);

SelectedTexture = "vanilla_processors"; /* ======================================== */
SelectedX = 256;
SelectedY = 128;
ADD("craftingtable_overlay"   ,0,0);
ADD("enchantmenttable_overlay",1,0,1,2);

ADD("furnace_overlay"     ,0,1);

ADD("anvil_overlay"       ,0,2,1,2);
ADD("brewingstand_overlay",1,2);

ADD("villager_old_overlay",1,3);

SelectedTexture = "vanilla_actions"; /* ======================================== */
ADD("dispenser_overlay" ,0,0);
ADD("hopper_overlay"    ,0,1,1,0.5);

SelectedTexture = "alpha"; /* ======================================== */
SelectedY = 256;
ADD("achievements_old",0,0);
ADD("creative_old"    ,1,0);

SelectedTexture = "vanilla_storage"; /* ======================================== */
ADD("chest_overlay",0,0,0.75,0.75);
ADD("horse_overlay",1,0);

SelectedTexture = "inventory"; /* ======================================== */
ADD("inventory_processor"       ,0,0);
ADD("inventory"                 ,1,0,n,n,[["Overlay","inventory_potion"]]);
ADD("inventory_old"             ,0,1,n,n,[["Overlay","inventory_potion"]]);
ADD("inventory_potion"          ,1,1);
ADD("inventory_processor_top"   ,0,0,1,1,[["Clear"],["Overlay","inventory_processor",0,-32]]);
ADD("inventory_processor_bottom",0,0,1,1,[["Clear"],["Overlay","inventory_processor",0, 56]]);
ADD("craftingtable"             ,0,0,n,n,[["Overlay","craftingtable_overlay"]]);
ADD("furnace"                   ,0,0,n,n,[["Overlay","furnace_overlay"]]);
ADD("dispenser"                 ,0,0,n,n,[["Overlay","dispenser_overlay"]]);
ADD("hopper"                    ,0,0,1,1,[["Clear"],["Overlay","inventory_processor_top"],["Overlay","hopper_overlay"]]);
ADD("anvil"                     ,0,0,n,n,[["Overlay","anvil_overlay"]]);
ADD("brewingstand"              ,0,0,n,n,[["Overlay","brewingstand_overlay"]]);
ADD("villager_old"              ,0,0,n,n,[["Overlay","villager_old_overlay"]]);
ADD("enchantmenttable"          ,0,0,n,n,[["Overlay","enchantmenttable_overlay"]]);
ADD("chest"                     ,0,0,1,1,[["Clear"],["Overlay","inventory_processor_bottom"],["Overlay","chest_overlay"]]);
ADD("horse"                     ,0,0,n,n,[["Overlay","horse_overlay"]]);

SelectedTexture = "creative"; /* ======================================== */
ADD("creative"          ,0,0);
ADD("creative_search"   ,1,0);

ADD("creative_tabs"     ,0,1);
ADD("creative_inventory",1,1);

SelectedTexture = "vanilla"; /* ======================================== */
ADD("beacon"            ,0,0);

SelectedTexture = "selector"; /* ======================================== */
ADD("select_packs",0,0);

SelectedTexture = "other"; /* ======================================== */
ADD("widgets" ,0    ,0,n,n,[["Clear",128,128,128,128]]);
ADD("icons"   ,1    ,0,n,n,[["Clear",240,0  ,16,64]]);
ADD("stream"  ,0.875,0,0.125,0.5);

ADD("stats"   ,0.5,0.5,0.5,0.5);

SelectedTexture = "overlays"; /* ======================================== */
ADD("overlay_pumpkin",0,0);

SelectedTexture = "items"; /* ======================================== */
ADD("book",0,0);

SelectedTexture = "background"; /* ======================================== */
SelectedX = 16;
SelectedY = 16;
ADD("background",0,0);

SelectedTexture = "unknown"; /* ======================================== */
SelectedX = 32;
SelectedY = 32;
ADD("unknown",0,0);

SelectedTexture = "blank"; /* ======================================== */
SelectedX = 256;
SelectedY = 256;
ADD("demo",0,0);