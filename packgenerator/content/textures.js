const L = "https://raw.githubusercontent.com/Woowz11/BloodRaw-Minecraft/refs/heads/main/packgenerator/content/";
const A_b = L + "assets/textures/blocks/"

function ADD(Arr, File, File_Info){
	Arr[File] = File_Info;
	return Arr;
}

function ADD_custom(Arr, Path, File, File_Info){
	return ADD(Arr, Path + File, File_Info);
}

function ADD_b(Arr,File,File_Info){
	return ADD_custom(Arr, A_b, File, File_Info);
}

function POS(x,y,size = 16){
	return [x,y,size,size]
}

function CONTENT_RESULT(){
	var Result = {};
	
	Result = ADD_b(Result, "dirts.png", {
		"dirt"      : [POS(0,0)],
		"dirt_rocks": [POS(1,0)],
		"podzol"    : [POS(2,0)],
		"path"      : [POS(3,0)],
		
		"dirt_roots" : [POS(0,1)],
		""           : [POS(1,1)],
		"podzol_side": [POS(2,1)],
		"path_side"  : [POS(3,1)]
	});
	
	Result = ADD_b(Result, "jewelry.png", {
		"diamond_block" : [POS(0,0)],
		"emerald_block" : [POS(1,0)],
		"redstone_block": [POS(2,0)],
		
		"lapis_block": [POS(0,1)],
		"gold_block" : [POS(1,1)],
		"beacon"     : [POS(2,1)]
	});
	
	return Result;
}