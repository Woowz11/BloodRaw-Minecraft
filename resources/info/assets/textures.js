ResourcePackInfo_AssetsTextures = {};
var RPI = ResourcePackInfo_AssetsTextures;
var ResourceType = "texture";
var Type = ".png";

var Base = "";
var n = null;

function ADD(Resource,Path,Condition){
	if(Condition==null){Condition=true};
	if(RPI[Base]==null){RPI[Base] = [];}
	var P = [];
	for(var p of Path){
		P.push([p[0],(typeof element == "string"?p[1]+Type:p[1])]);
	}
	RPI[Base].push([[ResourceType,Resource],P,Condition]);
}

/* ================================================================================================================================================================================ */

var To  = "other";
var Tb  = "block";
var Te  = "entity";
var Ten = "environment";
var Tp  = "particle";
var Tg  = "gui";
var Tpa = "painting";
var Ta  = "armor";

var png     = ".png";
var b       = "blocks/";
var i       = "items/";
var mt      = "minecraft/textures/";
var mtb     = mt+"blocks/";
var mti     = mt+"items/";
var mte     = mt+"environment/";
var mtf     = mt+"font/";
var mten    = mt+"entity/";
var mtp     = mt+"particle/";
var mtpaint = mt+"painting/";
var mtg     = mt+"gui/";
var mtm     = mt+"misc/";
var mta     = mt+"models/armor/";

/* Блоки Minecraft */ /* ======================================== */
Base = "Minecraft";
var T = "block";
var a = b;
var ma = mtb;

/* ==== Камень ==== */
ADD([T,"stone"              ],[ [-1,a+"stone"                   ],[0,ma+"stone"      ] ]);
ADD([T,"stone_smooth"       ],[ [-1,a+"stoneslab_top"           ],[0,ma+"stone_slab_top"] ]);
ADD([T,"slab_stone"         ],[ [-1,a+"stoneslab_side"          ],[0,ma+"stone_slab_side"] ]);
ADD([T,"cobblestone"        ],[ [-1,a+"stonebrick"              ],[0,ma+"cobblestone"] ]);
ADD([T,"cobblestone_moss"   ],[ [-1,a+"stoneMoss"               ],[0,ma+"cobblestone_mossy"] ]);
ADD([T,"bricks_stone"       ],[ [-1,a+"stonebricksmooth"        ],[0,ma+"stonebrick"] ]);
ADD([T,"bricks_stone_crack" ],[ [-1,a+"stonebricksmooth_cracked"],[0,ma+"stonebrick_cracked"] ]);
ADD([T,"bricks_stone_moss"  ],[ [-1,a+"stonebricksmooth_mossy"  ],[0,ma+"stonebrick_mossy"] ]);
ADD([T,"bricks_stone_carved"],[ [-1,a+"stonebricksmooth_carved" ],[0,ma+"stonebrick_carved"] ]);
ADD([T,"bedrock"            ],[ [-1,a+"bedrock"                 ],[0,ma+"bedrock"] ]);
ADD([T,"gravel"             ],[ [-1,a+"gravel"                  ],[0,ma+"gravel"] ]);
ADD([T,"obsidian"           ],[ [-1,a+"obsidian"                ],[0,ma+"obsidian"] ]);
ADD([T,"quartz"             ],[ [-1,a+"quartzblock_top"         ],[0,ma+"quartz_block_top"] ]);
ADD([T,"quartz"             ],[ [-1,a+"quartzblock_side"        ],[0,ma+"quartz_block_side"] ]);
ADD([T,"quartz_smooth"      ],[ [-1,a+"quartzblock_bottom"      ],[0,ma+"quartz_block_bottom"] ]);
ADD([T,"quartz_pillar_top"  ],[ [-1,a+"quartzblock_lines_top"   ],[0,ma+"quartz_block_lines_top"] ]);
ADD([T,"quartz_pillar"      ],[ [-1,a+"quartzblock_lines"       ],[0,ma+"quartz_block_lines"] ]);
ADD([T,"quartz_carved_top"  ],[ [-1,a+"quartzblock_chiseled_top"],[0,ma+"quartz_block_chiseled_top"] ]);
ADD([T,"quartz_carved"      ],[ [-1,a+"quartzblock_chiseled"    ],[0,ma+"quartz_block_chiseled"] ]);

/* ==== Земля ==== */
ADD([T,"dirt"        ],[ [-1,a+"dirt"        ],[0,ma+"dirt"] ]);
ADD([T,"farmland"    ],[ [-1,a+"farmland_dry"],[0,ma+"farmland_dry"] ]);
ADD([T,"farmland_wet"],[ [-1,a+"farmland_wet"],[0,ma+"farmland_wet"] ]);

/*1.7.2*/
ADD([T,"podzol"        ],[ [1,ma+"dirt_podzol_top" ] ]);
ADD([T,"podzol_side"   ],[ [1,ma+"dirt_podzol_side"] ]);

/* ==== Песок ==== */
ADD([T,"sand"                   ],[ [-1,a+"sand"            ],[0,ma+"sand"            ] ]);
ADD([T,"sandstone_smooth"       ],[ [-1,a+"sandstone_top"   ],[0,ma+"sandstone_top"   ] ]);
ADD([T,"sandstone"              ],[ [-1,a+"sandstone_side"  ],[0,ma+"sandstone_normal"] ]);
ADD([T,"sandstone"              ],[ [-1,a+"sandstone_bottom"],[0,ma+"sandstone_bottom"] ]);
ADD([T,"sandstone_smooth_carved"],[ [-1,a+"sandstone_smooth"],[0,ma+"sandstone_smooth"] ]);
ADD([T,"sandstone_carved"       ],[ [-1,a+"sandstone_carved"],[0,ma+"sandstone_carved"] ]);

/*1.7.2*/
ADD([T,"redsand"                ],[ [ 1,ma+"red_sand"] ]);

/* ==== Руды ==== */
ADD([T,"ore_coal"    ],[ [-1,a+"oreCoal"     ],[0,ma+"coal_ore"] ]);
ADD([T,"ore_iron"    ],[ [-1,a+"oreIron"     ],[0,ma+"iron_ore"] ]);
ADD([T,"ore_gold"    ],[ [-1,a+"oreGold"     ],[0,ma+"gold_ore"] ]);
ADD([T,"ore_diamond" ],[ [-1,a+"oreDiamond"  ],[0,ma+"diamond_ore"] ]);
ADD([T,"ore_redstone"],[ [-1,a+"oreRedstone" ],[0,ma+"redstone_ore"] ]);
ADD([T,"ore_emerald" ],[ [-1,a+"oreEmerald"  ],[0,ma+"emerald_ore"] ]);
ADD([T,"ore_lapis"   ],[ [-1,a+"oreLapis"    ],[0,ma+"lapis_ore"] ]);
ADD([T,"ore_quartz"  ],[ [-1,a+"netherquartz"],[0,ma+"quartz_ore"] ]);

/* ==== Доски ==== */
ADD([T,"oak_planks"   ],[ [-1,a+"wood"       ],[0,ma+"planks_oak"] ]);
ADD([T,"birch_planks" ],[ [-1,a+"wood_birch" ],[0,ma+"planks_birch"] ]);
ADD([T,"spruce_planks"],[ [-1,a+"wood_spruce"],[0,ma+"planks_spruce"] ]);
ADD([T,"jungle_planks"],[ [-1,a+"wood_jungle"],[0,ma+"planks_jungle"] ]);

/*1.7.2*/
ADD([T,"acacia_planks"   ],[ [1,ma+"planks_acacia"] ]);
ADD([T,"darkoak_planks"   ],[ [1,ma+"planks_big_oak"] ]);

/* ==== Глина ==== */
ADD([T,"clay"                ],[ [-1,a+"clay"],[0,ma+"clay"] ]);
ADD([T,"bricks"              ],[ [-1,a+"brick"],[0,ma+"brick"] ]);

/*1.6.1*/
ADD([T,"hardenedclay"        ],[ [ 0,ma+"hardened_clay"] ]);
ADD([T,"hardenedclay_white"  ],[ [ 0,ma+"hardened_clay_stained_white"] ]);
ADD([T,"hardenedclay_silver" ],[ [ 0,ma+"hardened_clay_stained_silver"] ]);
ADD([T,"hardenedclay_gray"   ],[ [ 0,ma+"hardened_clay_stained_gray"] ]);
ADD([T,"hardenedclay_black"  ],[ [ 0,ma+"hardened_clay_stained_black"] ]);
ADD([T,"hardenedclay_red"    ],[ [ 0,ma+"hardened_clay_stained_red"] ]);
ADD([T,"hardenedclay_orange" ],[ [ 0,ma+"hardened_clay_stained_orange"] ]);
ADD([T,"hardenedclay_yellow" ],[ [ 0,ma+"hardened_clay_stained_yellow"] ]);
ADD([T,"hardenedclay_aqua"   ],[ [ 0,ma+"hardened_clay_stained_light_blue"] ]);
ADD([T,"hardenedclay_blue"   ],[ [ 0,ma+"hardened_clay_stained_blue"] ]);
ADD([T,"hardenedclay_purple" ],[ [ 0,ma+"hardened_clay_stained_purple"] ]);
ADD([T,"hardenedclay_magenta"],[ [ 0,ma+"hardened_clay_stained_magenta"] ]);
ADD([T,"hardenedclay_pink"   ],[ [ 0,ma+"hardened_clay_stained_pink"] ]);
ADD([T,"hardenedclay_brown"  ],[ [ 0,ma+"hardened_clay_stained_brown"] ]);
ADD([T,"hardenedclay_green"  ],[ [ 0,ma+"hardened_clay_stained_green"] ]);
ADD([T,"hardenedclay_cyan"   ],[ [ 0,ma+"hardened_clay_stained_cyan"] ]);

/* ==== Стекло ==== */
ADD([T,"glass"     ],[ [-1,a+"glass"],[0,ma+"glass"] ]);
ADD([T,"glass_pane"],[ [-1,a+"thinglass_top"],[0,ma+"glass_pane_top"] ]);

/*1.7.2*/
ADD([T,"glass_white"  ],[ [1,ma+"glass_white"] ]);
ADD([T,"glass_pane"   ],[ [1,ma+"glass_white_pane_top"] ]);
ADD([T,"glass_silver" ],[ [1,ma+"glass_silver"] ]);
ADD([T,"glass_pane"   ],[ [1,ma+"glass_silver_pane_top"] ]);
ADD([T,"glass_gray"   ],[ [1,ma+"glass_gray"] ]);
ADD([T,"glass_pane"   ],[ [1,ma+"glass_gray_pane_top"] ]);
ADD([T,"glass_black"  ],[ [1,ma+"glass_black"] ]);
ADD([T,"glass_pane"   ],[ [1,ma+"glass_black_pane_top"] ]);
ADD([T,"glass_red"    ],[ [1,ma+"glass_red"] ]);
ADD([T,"glass_pane"   ],[ [1,ma+"glass_red_pane_top"] ]);
ADD([T,"glass_orange" ],[ [1,ma+"glass_orange"] ]);
ADD([T,"glass_pane"   ],[ [1,ma+"glass_orange_pane_top"] ]);
ADD([T,"glass_yellow" ],[ [1,ma+"glass_yellow"] ]);
ADD([T,"glass_pane"   ],[ [1,ma+"glass_yellow_pane_top"] ]);
ADD([T,"glass_lime"   ],[ [1,ma+"glass_lime"] ]);
ADD([T,"glass_pane"   ],[ [1,ma+"glass_lime_pane_top"] ]);
ADD([T,"glass_aqua"   ],[ [1,ma+"glass_light_blue"] ]);
ADD([T,"glass_pane"   ],[ [1,ma+"glass_light_blue_pane_top"] ]);
ADD([T,"glass_blue"   ],[ [1,ma+"glass_blue"] ]);
ADD([T,"glass_pane"   ],[ [1,ma+"glass_blue_pane_top"] ]);
ADD([T,"glass_purple" ],[ [1,ma+"glass_purple"] ]);
ADD([T,"glass_pane"   ],[ [1,ma+"glass_purple_pane_top"] ]);
ADD([T,"glass_magenta"],[ [1,ma+"glass_magenta"] ]);
ADD([T,"glass_pane"   ],[ [1,ma+"glass_magenta_pane_top"] ]);
ADD([T,"glass_pink"   ],[ [1,ma+"glass_pink"] ]);
ADD([T,"glass_pane"   ],[ [1,ma+"glass_pink_pane_top"] ]);
ADD([T,"glass_brown"  ],[ [1,ma+"glass_brown"] ]);
ADD([T,"glass_pane"   ],[ [1,ma+"glass_brown_pane_top"] ]);
ADD([T,"glass_green"  ],[ [1,ma+"glass_green"] ]);
ADD([T,"glass_pane"   ],[ [1,ma+"glass_green_pane_top"] ]);
ADD([T,"glass_cyan"   ],[ [1,ma+"glass_cyan"] ]);
ADD([T,"glass_pane"   ],[ [1,ma+"glass_cyan_pane_top"] ]);

/* ==== Металл ==== */
ADD([T,"iron"           ],[ [-1,a+"blockIron"      ],[0,ma+"block_iron"] ]);
ADD([T,"gold"           ],[ [-1,a+"blockGold"      ],[0,ma+"block_gold"] ]);
ADD([T,"cauldron_bottom"],[ [-1,a+"cauldron_bottom"],[0,ma+"cauldron_bottom"] ]);
ADD([T,"cauldron_inner" ],[ [-1,a+"cauldron_inner" ],[0,ma+"cauldron_inner"] ]);
ADD([T,"cauldron"       ],[ [-1,a+"cauldron_side"  ],[0,ma+"cauldron_side"] ]);
ADD([T,"cauldron_top"   ],[ [-1,a+"cauldron_top"   ],[0,ma+"cauldron_top"] ]);
ADD([T,"bars"           ],[ [-1,a+"fenceIron"      ],[0,ma+"iron_bars"] ]);
ADD([T,"hopper"         ],[ [-1,a+"hopper"         ],[0,ma+"hopper"] ]);
ADD([T,"hopper_inner"   ],[ [-1,a+"hopper_inside"  ],[0,ma+"hopper_inside"] ]);
ADD([T,"cauldron_top"   ],[ [-1,a+"hopper_top"     ],[0,ma+"hopper_top"] ]);

/* ==== Кристаллы/Камни ==== */
ADD([T,"diamond"],[ [-1,a+"blockDiamond"],[0,ma+"diamond_block"] ]);
ADD([T,"emerald"],[ [-1,a+"blockEmerald"],[0,ma+"emerald_block"] ]);
ADD([T,"lapis"  ],[ [-1,a+"blockLapis"  ],[0,ma+"lapis_block"] ]);

/* ==== Редстоун/Механизмы ==== */
ADD([T,"redstone"              ],[ [-1,a+"blockRedstone"             ],[0,ma+"redstone_block"] ]);
ADD([T,"comparator"            ],[ [-1,a+"comparator"                ],[0,ma+"comparator_off"] ]);
ADD([T,"comparator_on"         ],[ [-1,a+"comparator_lit"            ],[0,ma+"comparator_on"] ]);
ADD([T,"lightdetector"         ],[ [-1,a+"daylightDetector_side"     ],[0,ma+"daylight_detector_side"] ]);
ADD([T,"lightdetector_day"     ],[ [-1,a+"daylightDetector_top"      ],[0,ma+"daylight_detector_top"] ]);
ADD([T,"dispenser"             ],[ [-1,a+"dispenser_front"           ],[0,ma+"dispenser_front_horizontal"] ]);
ADD([T,"dispenser_top"         ],[ [-1,a+"dispenser_front_vertical"  ],[0,ma+"dispenser_front_vertical"] ]);
ADD([T,"dropper"               ],[ [-1,a+"dropper_front"             ],[0,ma+"dropper_front_horizontal"] ]);
ADD([T,"dropper_top"           ],[ [-1,a+"dropper_front_vertical"    ],[0,ma+"dropper_front_vertical"] ]);
ADD([T,"lever"                 ],[ [-1,a+"lever"                     ],[0,ma+"lever"] ]);
ADD([T,"piston"                ],[ [-1,a+"piston_top"                ],[0,ma+"piston_top"] ]);
ADD([T,"piston_slime"          ],[ [-1,a+"piston_top_sticky"         ],[0,ma+"piston_top_sticky"] ]);
ADD([T,"piston_side"           ],[ [-1,a+"piston_side"               ],[0,ma+"piston_side"] ]);
ADD([T,"piston_bottom"         ],[ [-1,a+"piston_bottom"             ],[0,ma+"piston_bottom"] ]);
ADD([T,"piston_inner"          ],[ [-1,a+"piston_inner_top"          ],[0,ma+"piston_inner"] ]);
ADD([T,"redstone_cross"        ],[ [-1,a+"redstoneDust_cross"        ],[0,ma+"redstone_dust_cross"] ]);
ADD([T,"redstone_line"         ],[ [-1,a+"redstoneDust_line"         ],[0,ma+"redstone_dust_line"] ]);
ADD([T,"redstone_cross_overlay"],[ [-1,a+"redstoneDust_cross_overlay"],[0,ma+"redstone_dust_cross_overlay"] ]);
ADD([T,"redstone_line_overlay" ],[ [-1,a+"redstoneDust_line_overlay" ],[0,ma+"redstone_dust_line_overlay"] ]);
ADD([T,"lamp"                  ],[ [-1,a+"redstoneLight"             ],[0,ma+"redstone_lamp_off"] ]);
ADD([T,"lamp_on"               ],[ [-1,a+"redstoneLight_lit"         ],[0,ma+"redstone_lamp_on"] ]);
ADD([T,"torch_redstone_off"    ],[ [-1,a+"redtorch"                  ],[0,ma+"redstone_torch_off"] ]);
ADD([T,"torch_redstone"        ],[ [-1,a+"redtorch_lit"              ],[0,ma+"redstone_torch_on"] ]);
ADD([T,"repeater"              ],[ [-1,a+"repeater"                  ],[0,ma+"repeater_off"] ]);
ADD([T,"repeater_on"           ],[ [-1,a+"repeater_lit"              ],[0,ma+"repeater_on"] ]);
ADD([T,"string"                ],[ [-1,a+"tripWire"                  ],[0,ma+"trip_wire"] ]);
ADD([T,"trip"                  ],[ [-1,a+"tripWireSource"            ],[0,ma+"trip_wire_source"] ]);

/* ==== Мебель/Декорации ==== */
ADD([T,"bed_foot_end"    ],[ [-1,a+"bed_feet_end"  ],[0,ma+"bed_feet_end"] ]);
ADD([T,"bed_foot_side"   ],[ [-1,a+"bed_feet_side" ],[0,ma+"bed_feet_side"] ]);
ADD([T,"bed_foot"        ],[ [-1,a+"bed_feet_top"  ],[0,ma+"bed_feet_top"] ]);
ADD([T,"bed_head_end"    ],[ [-1,a+"bed_head_end"  ],[0,ma+"bed_head_end"] ]);
ADD([T,"bed_head_side"   ],[ [-1,a+"bed_head_side" ],[0,ma+"bed_head_side"] ]);
ADD([T,"bed_head"        ],[ [-1,a+"bed_head_top"  ],[0,ma+"bed_head_top"] ]);
ADD([T,"bookshelf"       ],[ [-1,a+"bookshelf"     ],[0,ma+"bookshelf"] ]);
ADD([T,"iron_door"       ],[ [-1,a+"doorIron_upper"],[0,ma+"door_iron_upper"] ]);
ADD([T,"iron_door_bottom"],[ [-1,a+"doorIron_lower"],[0,ma+"door_iron_lower"] ]);
ADD([T,"oak_door"        ],[ [-1,a+"doorWood_upper"],[0,ma+"door_wood_upper"] ]);
ADD([T,"oak_door_bottom" ],[ [-1,a+"doorWood_lower"],[0,ma+"door_wood_lower"] ]);
ADD([T,"pot"             ],[ [-1,a+"flowerPot"     ],[0,ma+"flower_pot"] ]);
ADD([T,"ladder"          ],[ [-1,a+"ladder"        ],[0,ma+"ladder"] ]);
ADD([T,"itemframe"       ],[ [-1,a+"itemframe_back"],[0,ma+"itemframe_background"] ]);
ADD([T,"jukebox"         ],[ [-1,a+"jukebox_top"   ],[0,ma+"jukebox_top"] ]);
ADD([T,"noteblock"       ],[ [-1,a+"musicBlock"    ],[0,ma+"noteblock"] ]);
ADD([T,"torch"           ],[ [-1,a+"torch"         ],[0,ma+"torch_on"] ]);
ADD([T,"oak_trapdoor"    ],[ [-1,a+"trapdoor"      ],[0,ma+"trapdoor"] ]);

/*1.6.1*/
ADD([T,"jukebox_side"    ],[ [0,ma+"jukebox_side"] ]);

/* ==== Трава ==== */
ADD([T,"grass"             ],[ [-1,a+"grass_top"],[0,ma+"grass_top"] ]);
ADD([T,"grass_side"        ],[ [-1,a+"grass_side"],[0,ma+"grass_side"] ]);
ADD([T,"grass_side_overlay"],[ [-1,a+"grass_side_overlay"],[0,ma+"grass_side_overlay"] ]);
ADD([T,"mycelium"          ],[ [-1,a+"mycel_top"],[0,ma+"mycelium_top"] ]);
ADD([T,"mycelium_side"     ],[ [-1,a+"mycel_side"],[0,ma+"mycelium_side"] ]);

/* ==== Деревья ==== */
ADD([T,"oak"               ],[ [-1,a+"tree_side"],[0,ma+"log_oak"] ]);
ADD([T,"oak_top"           ],[ [-1,a+"tree_top"],[0,ma+"log_oak_top"] ]);
ADD([T,"birch"             ],[ [-1,a+"tree_birch"],[0,ma+"log_birch"] ]);
ADD([T,"spruce"            ],[ [-1,a+"tree_spruce"],[0,ma+"log_spruce"] ]);
ADD([T,"jungle"            ],[ [-1,a+"tree_jungle"],[0,ma+"log_jungle"] ]);
ADD([T,"oak_leaves"        ],[ [-1,a+"leaves"],[0,ma+"leaves_oak"] ]);
ADD([T,"oak_leaves_fast"   ],[ [-1,a+"leaves_opaque"],[0,ma+"leaves_oak_opaque"] ]);
ADD([T,"jungle_leaves"     ],[ [-1,a+"leaves_jungle"],[0,ma+"leaves_jungle"] ]);
ADD([T,"jungle_leaves_fast"],[ [-1,a+"leaves_jungle_opaque"],[0,ma+"leaves_jungle_opaque"] ]);
ADD([T,"spruce_leaves"     ],[ [-1,a+"leaves_spruce"],[0,ma+"leaves_spruce"] ]);
ADD([T,"spruce_leaves_fast"],[ [-1,a+"leaves_spruce_opaque"],[0,ma+"leaves_spruce_opaque"] ]);
ADD([T,"oak_sapling"       ],[ [-1,a+"sapling"],[0,ma+"sapling_oak"] ]);
ADD([T,"birch_sapling"     ],[ [-1,a+"sapling_birch"],[0,ma+"sapling_birch"] ]);
ADD([T,"spruce_sapling"    ],[ [-1,a+"sapling_spruce"],[0,ma+"sapling_spruce"] ]);
ADD([T,"jungle_sapling"    ],[ [-1,a+"sapling_jungle"],[0,ma+"sapling_jungle"] ]);

/*1.6.1*/
ADD([T,"birch_top"         ],[ [0,ma+"log_birch_top"] ]);
ADD([T,"spruce_top"        ],[ [0,ma+"log_spruce_top"] ]);
ADD([T,"jungle_top"        ],[ [0,ma+"log_jungle_top"] ]);
ADD([T,"birch_leaves"      ],[ [0,ma+"leaves_birch"] ]);
ADD([T,"birch_leaves_fast" ],[ [0,ma+"leaves_birch_opaque"] ]);

/*1.7.2*/
ADD([T,"acacia_top"         ],[ [1,ma+"log_acacia"] ]);
ADD([T,"acacia"             ],[ [1,ma+"log_acacia_top"] ]);
ADD([T,"acacia_leaves"      ],[ [1,ma+"leaves_acacia"] ]);
ADD([T,"acacia_leaves_fast" ],[ [1,ma+"leaves_acacia_opaque"] ]);
ADD([T,"darkoak"            ],[ [1,ma+"log_big_oak"] ]);
ADD([T,"darkoak_top"        ],[ [1,ma+"log_big_oak_top"] ]);
ADD([T,"darkoak_leaves"     ],[ [1,ma+"leaves_big_oak"] ]);
ADD([T,"darkoak_leaves_fast"],[ [1,ma+"leaves_big_oak_opaque"] ]);
ADD([T,"acacia_sapling"     ],[ [1,ma+"sapling_acacia"] ]);
ADD([T,"darkoak_sapling"    ],[ [1,ma+"sapling_roofed_oak"] ]);

/* ==== Транспортировка ==== */
ADD([T,"rail_corner"      ],[ [-1,a+"rail_turn"],[0,ma+"rail_normal_turned"] ]);
ADD([T,"rail"             ],[ [-1,a+"rail"],[0,ma+"rail_normal"] ]);
ADD([T,"railgold"         ],[ [-1,a+"goldenRail"],[0,ma+"rail_golden"] ]);
ADD([T,"railgold_on"      ],[ [-1,a+"goldenRail_powered"],[0,ma+"rail_golden_powered"] ]);
ADD([T,"rail_detector"    ],[ [-1,a+"detectorRail"],[0,ma+"rail_detector"] ]);
ADD([T,"rail_detector_on" ],[ [-1,a+"detectorRail_on"],[0,ma+"rail_detector_powered"] ]);
ADD([T,"rail_activator"   ],[ [-1,a+"activatorRail"],[0,ma+"rail_activator"] ]);
ADD([T,"rail_activator_on"],[ [-1,a+"activatorRail_powered"],[0,ma+"rail_activator_powered"] ]);

/* ==== Магия ==== */
ADD([T,"beacon"                 ],[ [-1,a+"beacon"            ],[0,ma+"beacon"] ]);
ADD([T,"enchantmenttable"       ],[ [-1,a+"enchantment_top"   ],[0,ma+"enchanting_table_top"] ]);
ADD([T,"enchantmenttable_side"  ],[ [-1,a+"enchantment_side"  ],[0,ma+"enchanting_table_side"] ]);
ADD([T,"enchantmenttable_bottom"],[ [-1,a+"enchantment_bottom"],[0,ma+"enchanting_table_bottom"] ]);
ADD([T,"brewingstand"           ],[ [-1,a+"brewingStand"      ],[0,ma+"brewing_stand"] ]);
ADD([T,"brewingstand_base"      ],[ [-1,a+"brewingStand_base" ],[0,ma+"brewing_stand_base"] ]);

/* ==== Инструменты/Верстаки/Переработчики ==== */
ADD([T,"craftingtable"       ],[ [-1,a+"workbench_top"],[0,ma+"crafting_table_top"] ]);
ADD([T,"craftingtable_side"  ],[ [-1,a+"workbench_side"],[0,ma+"crafting_table_side"] ]);
ADD([T,"craftingtable_side_2"],[ [-1,a+"workbench_front"],[0,ma+"crafting_table_front"] ]);
ADD([T,"furnace"             ],[ [-1,a+"furnace_front"],[0,ma+"furnace_front_off"] ]);
ADD([T,"furnace_on"          ],[ [-1,a+"furnace_front_lit"],[0,ma+"furnace_front_on"] ]);
ADD([T,"cobblestone_side"    ],[ [-1,a+"furnace_side"],[0,ma+"furnace_side"] ]);
ADD([T,"cobblestone_top"     ],[ [-1,a+"furnace_top"],[0,ma+"furnace_top"] ]);
ADD([T,"anvil"               ],[ [-1,a+"anvil_base"         ],[0,ma+"anvil_base"] ]);
ADD([T,"anvil_0"             ],[ [-1,a+"anvil_top"          ],[0,ma+"anvil_top_damaged_0"] ]);
ADD([T,"anvil_1"             ],[ [-1,a+"anvil_top_damaged_1"],[0,ma+"anvil_top_damaged_1"] ]);
ADD([T,"anvil_2"             ],[ [-1,a+"anvil_top_damaged_2"],[0,ma+"anvil_top_damaged_2"] ]);

/* ==== Растения ==== */
ADD([T,"cactus_bottom"      ],[ [-1,a+"cactus_bottom"],[0,ma+"cactus_bottom"] ]);
ADD([T,"cactus"             ],[ [-1,a+"cactus_side"],[0,ma+"cactus_side"] ]);
ADD([T,"cactus_top"         ],[ [-1,a+"cactus_top"],[0,ma+"cactus_top"] ]);
ADD([T,"carrot_0"           ],[ [-1,a+"carrots_0"],[0,ma+"carrots_stage_0"] ]);
ADD([T,"carrot_1"           ],[ [-1,a+"carrots_1"],[0,ma+"carrots_stage_1"] ]);
ADD([T,"carrot_2"           ],[ [-1,a+"carrots_2"],[0,ma+"carrots_stage_2"] ]);
ADD([T,"carrot"             ],[ [-1,a+"carrots_3"],[0,ma+"carrots_stage_3"] ]);
ADD([T,"cocoa_0"            ],[ [-1,a+"cocoa_0"],[0,ma+"cocoa_stage_0"] ]);
ADD([T,"cocoa_1"            ],[ [-1,a+"cocoa_1"],[0,ma+"cocoa_stage_1"] ]);
ADD([T,"cocoa"              ],[ [-1,a+"cocoa_2"],[0,ma+"cocoa_stage_2"] ]);
ADD([T,"wheat_0"            ],[ [-1,a+"crops_0"],[0,ma+"wheat_stage_0"] ]);
ADD([T,"wheat_1"            ],[ [-1,a+"crops_1"],[0,ma+"wheat_stage_1"] ]);
ADD([T,"wheat_2"            ],[ [-1,a+"crops_2"],[0,ma+"wheat_stage_2"] ]);
ADD([T,"wheat_3"            ],[ [-1,a+"crops_3"],[0,ma+"wheat_stage_3"] ]);
ADD([T,"wheat_4"            ],[ [-1,a+"crops_4"],[0,ma+"wheat_stage_4"] ]);
ADD([T,"wheat_5"            ],[ [-1,a+"crops_5"],[0,ma+"wheat_stage_5"] ]);
ADD([T,"wheat_6"            ],[ [-1,a+"crops_6"],[0,ma+"wheat_stage_6"] ]);
ADD([T,"wheat"              ],[ [-1,a+"crops_7"],[0,ma+"wheat_stage_7"] ]);
ADD([T,"bush_dead"          ],[ [-1,a+"deadbush"],[0,ma+"deadbush"] ]);
ADD([T,"tallgrass"          ],[ [-1,a+"tallgrass"],[0,ma+"tallgrass"] ]);
ADD([T,"fern"               ],[ [-1,a+"fern"],[0,ma+"fern"] ]);
ADD([T,"flower_dandelion"   ],[ [-1,a+"flower"],[0,ma+"flower_dandelion"] ]);
ADD([T,"flower_rose"        ],[ [-1,a+"rose"],[0,ma+"flower_rose"],[1,false] ]);
ADD([T,"mushroom_brown"     ],[ [-1,a+"mushroom_brown"],[0,ma+"mushroom_brown"] ]);
ADD([T,"mushroom_red"       ],[ [-1,a+"mushroom_red"],[0,ma+"mushroom_red"] ]);
ADD([T,"mushroom_stem"      ],[ [-1,a+"mushroom_skin_stem"],[0,ma+"mushroom_block_skin_stem"] ]);
ADD([T,"mushroom"           ],[ [-1,a+"mushroom_inside"],[0,ma+"mushroom_block_inside"] ]);
ADD([T,"mushroom_brown_skin"],[ [-1,a+"mushroom_skin_brown"],[0,ma+"mushroom_block_skin_brown"] ]);
ADD([T,"mushroom_red_skin"  ],[ [-1,a+"mushroom_skin_red"],[0,ma+"mushroom_block_skin_red"] ]);
ADD([T,"potato_0"           ],[ [-1,a+"potatoes_0"],[0,ma+"potatoes_stage_0"] ]);
ADD([T,"potato_1"           ],[ [-1,a+"potatoes_1"],[0,ma+"potatoes_stage_1"] ]);
ADD([T,"potato_2"           ],[ [-1,a+"potatoes_2"],[0,ma+"potatoes_stage_2"] ]);
ADD([T,"potato"             ],[ [-1,a+"potatoes_3"],[0,ma+"potatoes_stage_3"] ]);
ADD([T,"stem"               ],[ [-1,a+"stem_straight"],[0,ma+"pumpkin_stem_disconnected"] ]);
ADD([T,"stem_corner"        ],[ [-1,a+"stem_bent"],[0,ma+"pumpkin_stem_connected"] ]);
ADD([T,"pumpkin_face"       ],[ [-1,a+"pumpkin_face"],[0,ma+"pumpkin_face_off"] ]);
ADD([T,"pumpkin_face_on"    ],[ [-1,a+"pumpkin_jack"],[0,ma+"pumpkin_face_on"] ]);
ADD([T,"pumpkin"            ],[ [-1,a+"pumpkin_side"],[0,ma+"pumpkin_side"] ]);
ADD([T,"pumpkin_top"        ],[ [-1,a+"pumpkin_top"],[0,ma+"pumpkin_top"] ]);
ADD([T,"watermelon_top"     ],[ [-1,a+"melon_top"],[0,ma+"melon_top"] ]);
ADD([T,"watermelon"         ],[ [-1,a+"melon_side"],[0,ma+"melon_side"] ]);
ADD([T,"sugarcane"          ],[ [-1,a+"reeds"],[0,ma+"reeds"] ]);
ADD([T,"vine"               ],[ [-1,a+"vine"],[0,ma+"vine"] ]);
ADD([T,"waterlily"          ],[ [-1,a+"waterlily"],[0,ma+"waterlily"] ]);

/*1.6.1*/
ADD([T,"stem"               ],[ [ 0,ma+"melon_stem_disconnected"] ]);
ADD([T,"stem_corner"        ],[ [ 0,ma+"melon_stem_connected"] ]);

/*1.7.2*/
ADD([T,"tallgrass_big"          ],[ [1,ma+"double_plant_grass_top"] ]);
ADD([T,"tallgrass_big_bottom"   ],[ [1,ma+"double_plant_grass_bottom"] ]);
ADD([T,"fern_big"               ],[ [1,ma+"double_plant_fern_top"] ]);
ADD([T,"fern_big_bottom"        ],[ [1,ma+"double_plant_fern_bottom"] ]);
ADD([T,"flower_paeonia"         ],[ [1,ma+"double_plant_paeonia_top"] ]);
ADD([T,"flower_paeonia_bottom"  ],[ [1,ma+"double_plant_paeonia_bottom"] ]);
ADD([T,"flower_rose_big"        ],[ [1,ma+"double_plant_rose_top"] ]);
ADD([T,"flower_rose_big_bottom" ],[ [1,ma+"double_plant_rose_bottom"] ]);
ADD([T,"flower_syringa"         ],[ [1,ma+"double_plant_syringa_top"] ]);
ADD([T,"flower_syringa_bottom"  ],[ [1,ma+"double_plant_syringa_bottom"] ]);
ADD([T,"flower_sunflower"       ],[ [1,ma+"double_plant_sunflower_top"] ]);
ADD([T,"flower_sunflower_bottom"],[ [1,ma+"double_plant_sunflower_bottom"] ]);
ADD([T,"sunflower"              ],[ [1,ma+"double_plant_sunflower_front"] ]);
ADD([T,"sunflower_back"         ],[ [1,ma+"double_plant_sunflower_back"] ]);
ADD([T,"flower_poppy"           ],[ [1,ma+"flower_rose"] ]);
ADD([T,"flower_allium"          ],[ [1,ma+"flower_allium"] ]);
ADD([T,"flower_orchid"          ],[ [1,ma+"flower_blue_orchid"] ]);
ADD([T,"flower_houstonia"       ],[ [1,ma+"flower_houstonia"] ]);
ADD([T,"flower_daisy"           ],[ [1,ma+"flower_oxeye_daisy"] ]);
ADD([T,"flower_tulip_orange"    ],[ [1,ma+"flower_tulip_orange"] ]);
ADD([T,"flower_tulip_pink"      ],[ [1,ma+"flower_tulip_pink"] ]);
ADD([T,"flower_tulip_red"       ],[ [1,ma+"flower_tulip_red"] ]);
ADD([T,"flower_tulip"           ],[ [1,ma+"flower_tulip_white"] ]);

/* ==== Разноцветное ==== */
ADD([T,"wool"        ],[ [-1,a+"cloth_0" ],[0,ma+"wool_colored_white"] ]);
ADD([T,"wool_silver" ],[ [-1,a+"cloth_8" ],[0,ma+"wool_colored_silver"] ]);
ADD([T,"wool_gray"   ],[ [-1,a+"cloth_7" ],[0,ma+"wool_colored_gray"] ]);
ADD([T,"wool_black"  ],[ [-1,a+"cloth_15"],[0,ma+"wool_colored_black"] ]);
ADD([T,"wool_red"    ],[ [-1,a+"cloth_14"],[0,ma+"wool_colored_red"] ]);
ADD([T,"wool_orange" ],[ [-1,a+"cloth_1" ],[0,ma+"wool_colored_orange"] ]);
ADD([T,"wool_yellow" ],[ [-1,a+"cloth_4" ],[0,ma+"wool_colored_yellow"] ]);
ADD([T,"wool_lime"   ],[ [-1,a+"cloth_5" ],[0,ma+"wool_colored_lime"] ]);
ADD([T,"wool_aqua"   ],[ [-1,a+"cloth_3" ],[0,ma+"wool_colored_light_blue"] ]);
ADD([T,"wool_blue"   ],[ [-1,a+"cloth_11"],[0,ma+"wool_colored_blue"] ]);
ADD([T,"wool_purple" ],[ [-1,a+"cloth_10"],[0,ma+"wool_colored_purple"] ]);
ADD([T,"wool_magenta"],[ [-1,a+"cloth_2" ],[0,ma+"wool_colored_magenta"] ]);
ADD([T,"wool_pink"   ],[ [-1,a+"cloth_6" ],[0,ma+"wool_colored_pink"] ]);
ADD([T,"wool_brown"  ],[ [-1,a+"cloth_12"],[0,ma+"wool_colored_brown"] ]);
ADD([T,"wool_green"  ],[ [-1,a+"cloth_13"],[0,ma+"wool_colored_green"] ]);
ADD([T,"wool_cyan"   ],[ [-1,a+"cloth_9" ],[0,ma+"wool_colored_cyan"] ]);

/* ==== Снег ==== */
ADD([T,"ice"            ],[ [-1,a+"ice"      ],[0,ma+"ice"] ]);
ADD([T,"snow"           ],[ [-1,a+"snow"     ],[0,ma+"snow"] ]);
ADD([T,"grass_side_snow"],[ [-1,a+"snow_side"],[0,ma+"grass_side_snowed"] ]);

/*1.7.2*/
ADD([T,"ice_packed"     ],[ [1,a+"ice_packed"],[0,ma+"ice"] ]);

/* ==== Незер ==== */
ADD([T,"netherrack"  ],[ [-1,a+"hellrock"     ],[0,ma+"netherrack"] ]);
ADD([T,"soulsand"    ],[ [-1,a+"hellsand"     ],[0,ma+"soul_sand"] ]);
ADD([T,"glowstone"   ],[ [-1,a+"lightgem"     ],[0,ma+"glowstone"] ]);
ADD([T,"netherbricks"],[ [-1,a+"netherBrick"  ],[0,ma+"nether_brick"] ]);
ADD([T,"wart_0"      ],[ [-1,a+"netherStalk_0"],[0,ma+"nether_wart_stage_0"] ]);
ADD([T,"wart_1"      ],[ [-1,a+"netherStalk_1"],[0,ma+"nether_wart_stage_1"] ]);
ADD([T,"wart_2"      ],[ [-1,a+"netherStalk_2"],[0,ma+"nether_wart_stage_2"] ]);

/* ==== Энд ==== */
ADD([T,"endframe"     ],[ [-1,a+"endframe_top"],[0,ma+"endframe_top"] ]);
ADD([T,"endframe_side"],[ [-1,a+"endframe_side"],[0,ma+"endframe_side"] ]);
ADD([T,"endframe_eye" ],[ [-1,a+"endframe_eye"],[0,ma+"endframe_eye"] ]);
ADD([T,"endstone"     ],[ [-1,a+"whiteStone"],[0,ma+"end_stone"] ]);

/* ==== Необычное ==== */
ADD([T,"destroy_0"],[ [-1,a+"destroy_0"],[0,ma+"destroy_stage_0"] ]);
ADD([T,"destroy_1"],[ [-1,a+"destroy_1"],[0,ma+"destroy_stage_1"] ]);
ADD([T,"destroy_2"],[ [-1,a+"destroy_2"],[0,ma+"destroy_stage_2"] ]);
ADD([T,"destroy_3"],[ [-1,a+"destroy_3"],[0,ma+"destroy_stage_3"] ]);
ADD([T,"destroy_4"],[ [-1,a+"destroy_4"],[0,ma+"destroy_stage_4"] ]);
ADD([T,"destroy_5"],[ [-1,a+"destroy_5"],[0,ma+"destroy_stage_5"] ]);
ADD([T,"destroy_6"],[ [-1,a+"destroy_6"],[0,ma+"destroy_stage_6"] ]);
ADD([T,"destroy_7"],[ [-1,a+"destroy_7"],[0,ma+"destroy_stage_7"] ]);
ADD([T,"destroy_8"],[ [-1,a+"destroy_8"],[0,ma+"destroy_stage_8"] ]);
ADD([T,"destroy_9"],[ [-1,a+"destroy_9"],[0,ma+"destroy_stage_9"] ]);
ADD([T,"fire"     ],[ [-1,a+"fire_0"   ],[0,ma+"fire_layer_0"] ]);
ADD([T,"fire_2"   ],[ [-1,a+"fire_1"   ],[0,ma+"fire_layer_1"] ]);
ADD([T,"portal"   ],[ [-1,a+"portal"   ],[0,ma+"portal"] ]);

/* ==== Жидкости ==== */
ADD([T,"water_old"     ],[ [-1,a+"water"     ],[0,ma+"water_still"] ]);
ADD([T,"water_flow_old"],[ [-1,a+"water_flow"],[0,ma+"water_flow"] ]);
ADD([T,"lava"          ],[ [-1,a+"lava"      ],[0,ma+"lava_still"] ]);
ADD([T,"lava_flow"     ],[ [-1,a+"lava_flow" ],[0,ma+"lava_flow"] ]);

/* ==== Остальное ==== */
ADD([T,"cake_bottom"],[ [-1,a+"cake_bottom" ],[0,ma+"cake_bottom"] ]);
ADD([T,"cake_inner" ],[ [-1,a+"cake_inner"  ],[0,ma+"cake_inner"] ]);
ADD([T,"cake_side"  ],[ [-1,a+"cake_side"   ],[0,ma+"cake_side"] ]);
ADD([T,"cake"       ],[ [-1,a+"cake_top"    ],[0,ma+"cake_top"] ]);
ADD([T,"command"    ],[ [-1,a+"commandBlock"],[0,ma+"command_block"] ]);
ADD([T,"dragonegg"  ],[ [-1,a+"dragonEgg"   ],[0,ma+"dragon_egg"] ]);
ADD([T,"spawner"    ],[ [-1,a+"mobSpawner"  ],[0,ma+"mob_spawner"] ]);
ADD([T,"sponge"     ],[ [-1,a+"sponge"      ],[0,ma+"sponge"] ]);
ADD([T,"tnt_top"    ],[ [-1,a+"tnt_top"     ],[0,ma+"tnt_top"] ]);
ADD([T,"tnt"        ],[ [-1,a+"tnt_side"    ],[0,ma+"tnt_side"] ]);
ADD([T,"tnt_bottom" ],[ [-1,a+"tnt_bottom"  ],[0,ma+"tnt_bottom"] ]);
ADD([T,"cobweb"     ],[ [-1,a+"web"         ],[0,ma+"web"] ]);

/*1.6.1*/
ADD([T,"hay_side"   ],[ [ 0,ma+"hay_block_side"] ]);
ADD([T,"hay"        ],[ [ 0,ma+"hay_block_top"] ]);
ADD([T,"coal"       ],[ [ 0,ma+"coal_block"] ]);

/* Предметы Minecraft */ /* ======================================== */
T = "item";
a = i;
ma = mti;

/* ==== Еда ==== */
ADD([T,"apple"              ],[ [-1,a+"apple"          ],[0,ma+"apple"] ]);
ADD([T,"apple_gold"         ],[ [-1,a+"appleGold"      ],[0,ma+"apple_golden"] ]);
ADD([T,"meat_cow"           ],[ [-1,a+"beefRaw"        ],[0,ma+"beef_raw"] ]);
ADD([T,"meat_cow_cooked"    ],[ [-1,a+"beefCooked"     ],[0,ma+"beef_cooked"] ]);
ADD([T,"meat_pig"           ],[ [-1,a+"porkchopRaw"    ],[0,ma+"porkchop_raw"] ]);
ADD([T,"meat_pig_cooked"    ],[ [-1,a+"porkchopCooked" ],[0,ma+"porkchop_cooked"] ]);
ADD([T,"meat_chicken"       ],[ [-1,a+"chickenRaw"     ],[0,ma+"chicken_raw"] ]);
ADD([T,"meat_chicken_cooked"],[ [-1,a+"chickenCooked"  ],[0,ma+"chicken_cooked"] ]);
ADD([T,"meat_rotten"        ],[ [-1,a+"rottenFlesh"    ],[0,ma+"rotten_flesh"] ]);
ADD([T,"fish"               ],[ [-1,a+"fishRaw"        ],[0,ma+"fish_raw"],[1,ma+"fish_cod_raw"] ]);
ADD([T,"fish_cooked"        ],[ [-1,a+"fishCooked"     ],[0,ma+"fish_cooked"],[1,ma+"fish_cod_cooked"] ]);
ADD([T,"bread"              ],[ [-1,a+"bread"          ],[0,ma+"bread"] ]);
ADD([T,"cake"               ],[ [-1,a+"cake"           ],[0,ma+"cake"] ]);
ADD([T,"pie"                ],[ [-1,a+"pumpkinPie"     ],[0,ma+"pumpkin_pie"] ]);
ADD([T,"potato"             ],[ [-1,a+"potato"         ],[0,ma+"potato"] ]);
ADD([T,"potato_cooked"      ],[ [-1,a+"potatoBaked"    ],[0,ma+"potato_baked"] ]);
ADD([T,"potato_rotten"      ],[ [-1,a+"potatoPoisonous"],[0,ma+"potato_poisonous"] ]);
ADD([T,"carrot"             ],[ [-1,a+"carrots"        ],[0,ma+"carrot"] ]);
ADD([T,"carrot_gold"        ],[ [-1,a+"carrotGolden"   ],[0,ma+"carrot_golden"] ]);
ADD([T,"cookie"             ],[ [-1,a+"cookie"         ],[0,ma+"cookie"] ]);
ADD([T,"watermelon"         ],[ [-1,a+"melon"          ],[0,ma+"melon"] ]);
ADD([T,"stew"               ],[ [-1,a+"mushroomStew"   ],[0,ma+"mushroom_stew"] ]);
ADD([T,"potion"             ],[ [-1,a+"potion"         ],[0,ma+"potion_bottle_drinkable"] ]);
ADD([T,"potion_overlay"     ],[ [-1,a+"potion_contents"],[0,ma+"potion_overlay"] ]);
ADD([T,"potion_splash"      ],[ [-1,a+"potion_splash"  ],[0,ma+"potion_bottle_splash"] ]);
ADD([T,"spidereye"          ],[ [-1,a+"spiderEye"      ],[0,ma+"spider_eye"] ]);

/*1.7.2*/
ADD([T,"fish_salmon"       ],[ [1,ma+"fish_salmon_raw"    ] ]);
ADD([T,"fish_salmon_cooked"],[ [1,ma+"fish_salmon_cooked" ] ]);
ADD([T,"fish_clown"        ],[ [1,ma+"fish_clownfish_raw" ] ]);
ADD([T,"fish_puffer"       ],[ [1,ma+"fish_pufferfish_raw"] ]);

/* ==== Оружие ==== */
ADD([T,"diamond_sword"],[ [-1,a+"swordDiamond"],[0,ma+"diamond_sword"] ]);
ADD([T,"gold_sword"   ],[ [-1,a+"swordGold"   ],[0,ma+"gold_sword"] ]);
ADD([T,"iron_sword"   ],[ [-1,a+"swordIron"   ],[0,ma+"iron_sword"] ]);
ADD([T,"stone_sword"  ],[ [-1,a+"swordStone"  ],[0,ma+"stone_sword"] ]);
ADD([T,"wood_sword"   ],[ [-1,a+"swordWood"   ],[0,ma+"wood_sword"] ]);
ADD([T,"bow"          ],[ [-1,a+"bow"         ],[0,ma+"bow_standby"] ]);
ADD([T,""             ],[ [-1,a+"bow_pull_0"  ],[0,ma+"bow_pulling_0"] ]);
ADD([T,""             ],[ [-1,a+"bow_pull_1"  ],[0,ma+"bow_pulling_1"] ]);
ADD([T,""             ],[ [-1,a+"bow_pull_2"  ],[0,ma+"bow_pulling_2"] ]);
ADD([T,"arrow"        ],[ [-1,a+"arrow"       ],[0,ma+"arrow"] ]);

/* ==== Инструменты ==== */
ADD([T,"diamond_pickaxe"],[ [-1,a+"pickaxeDiamond"  ],[0,ma+"diamond_pickaxe"] ]);
ADD([T,"gold_pickaxe"   ],[ [-1,a+"pickaxeGold"     ],[0,ma+"gold_pickaxe"] ]);
ADD([T,"iron_pickaxe"   ],[ [-1,a+"pickaxeIron"     ],[0,ma+"iron_pickaxe"] ]);
ADD([T,"stone_pickaxe"  ],[ [-1,a+"pickaxeStone"    ],[0,ma+"stone_pickaxe"] ]);
ADD([T,"wood_pickaxe"   ],[ [-1,a+"pickaxeWood"     ],[0,ma+"wood_pickaxe"] ]);
ADD([T,"diamond_axe"    ],[ [-1,a+"hatchetDiamond"  ],[0,ma+"diamond_axe"] ]);
ADD([T,"gold_axe"       ],[ [-1,a+"hatchetGold"     ],[0,ma+"gold_axe"] ]);
ADD([T,"iron_axe"       ],[ [-1,a+"hatchetIron"     ],[0,ma+"iron_axe"] ]);
ADD([T,"stone_axe"      ],[ [-1,a+"hatchetStone"    ],[0,ma+"stone_axe"] ]);
ADD([T,"wood_axe"       ],[ [-1,a+"hatchetWood"     ],[0,ma+"wood_axe"] ]);
ADD([T,"diamond_shovel" ],[ [-1,a+"shovelDiamond"   ],[0,ma+"diamond_shovel"] ]);
ADD([T,"gold_shovel"    ],[ [-1,a+"shovelGold"      ],[0,ma+"gold_shovel"] ]);
ADD([T,"iron_shovel"    ],[ [-1,a+"shovelIron"      ],[0,ma+"iron_shovel"] ]);
ADD([T,"stone_shovel"   ],[ [-1,a+"shovelStone"     ],[0,ma+"stone_shovel"] ]);
ADD([T,"wood_shovel"    ],[ [-1,a+"shovelWood"      ],[0,ma+"wood_shovel"] ]);
ADD([T,"diamond_hoe"    ],[ [-1,a+"hoeDiamond"      ],[0,ma+"diamond_hoe"] ]);
ADD([T,"gold_hoe"       ],[ [-1,a+"hoeGold"         ],[0,ma+"gold_hoe"] ]);
ADD([T,"iron_hoe"       ],[ [-1,a+"hoeIron"         ],[0,ma+"iron_hoe"] ]);
ADD([T,"stone_hoe"      ],[ [-1,a+"hoeStone"        ],[0,ma+"stone_hoe"] ]);
ADD([T,"wood_hoe"       ],[ [-1,a+"hoeWood"         ],[0,ma+"wood_hoe"] ]);
ADD([T,"lighter"        ],[ [-1,a+"flintAndSteel"   ],[0,ma+"flint_and_steel"] ]);
ADD([T,"shears"         ],[ [-1,a+"shears"          ],[0,ma+"shears"] ]);
ADD([T,"bucket"         ],[ [-1,a+"bucket"          ],[0,ma+"bucket_empty"] ]);
ADD([T,"bucket_water"   ],[ [-1,a+"bucketWater"     ],[0,ma+"bucket_water"] ]);
ADD([T,"bucket_lava"    ],[ [-1,a+"bucketLava"      ],[0,ma+"bucket_lava"] ]);
ADD([T,"bucket_milk"    ],[ [-1,a+"milk"            ],[0,ma+"bucket_milk"] ]);
ADD([T,"fishrod"        ],[ [-1,a+"fishingRod"      ],[0,ma+"fishing_rod_cast"] ]);
ADD([T,"fishrod_empty"  ],[ [-1,a+"fishingRod_empty"],[0,ma+"fishing_rod_uncast"] ]);
ADD([T,"fishrod_carrot" ],[ [-1,a+"carrotOnAStick"  ],[0,ma+"carrot_on_a_stick"] ]);
ADD([T,"clock"          ],[ [-1,a+"clock"           ],[0,ma+"clock"] ]);
ADD([T,"compass"        ],[ [-1,a+"compass"         ],[0,ma+"compass"] ]);
ADD([T,"map"            ],[ [-1,a+"emptyMap"        ],[0,ma+"map_empty"] ]);
ADD([T,"map_filled"     ],[ [-1,a+"map"             ],[0,ma+"map_filled"] ]);
ADD([T,"leash"          ],[ [ 0,ma+"lead"] ]);
ADD([T,"nametag"        ],[ [ 0,ma+"name_tag"] ]);

/* ==== Броня ==== */
ADD([T,"chain_helmet"          ],[ [-1,a+"helmetChain"            ],[0,ma+"chainmail_helmet"] ]);
ADD([T,"leather_helmet"        ],[ [-1,a+"helmetCloth"            ],[0,ma+"leather_helmet"] ]);
ADD([T,"leather_helmet_overlay"],[ [-1,a+"helmetCloth_overlay"    ],[0,ma+"leather_helmet_overlay"] ]);
ADD([T,"diamond_helmet"        ],[ [-1,a+"helmetDiamond"          ],[0,ma+"diamond_helmet"] ]);
ADD([T,"gold_helmet"           ],[ [-1,a+"helmetGold"             ],[0,ma+"gold_helmet"] ]);
ADD([T,"iron_helmet"           ],[ [-1,a+"helmetIron"             ],[0,ma+"iron_helmet"] ]);
ADD([T,"chain_chest"           ],[ [-1,a+"chestplateChain"        ],[0,ma+"chainmail_chestplate"] ]);
ADD([T,"leather_chest"         ],[ [-1,a+"chestplateCloth"        ],[0,ma+"leather_chestplate"] ]);
ADD([T,"leather_chest_overlay" ],[ [-1,a+"chestplateCloth_overlay"],[0,ma+"leather_chestplate_overlay"] ]);
ADD([T,"diamond_chest"         ],[ [-1,a+"chestplateDiamond"      ],[0,ma+"diamond_chestplate"] ]);
ADD([T,"gold_chest"            ],[ [-1,a+"chestplateGold"         ],[0,ma+"gold_chestplate"] ]);
ADD([T,"iron_chest"            ],[ [-1,a+"chestplateIron"         ],[0,ma+"iron_chestplate"] ]);
ADD([T,"chain_pants"           ],[ [-1,a+"leggingsChain"          ],[0,ma+"chainmail_leggings"] ]);
ADD([T,"leather_pants"         ],[ [-1,a+"leggingsCloth"          ],[0,ma+"leather_leggings"] ]);
ADD([T,"leather_pants_overlay" ],[ [-1,a+"leggingsCloth_overlay"  ],[0,ma+"leather_leggings_overlay"] ]);
ADD([T,"diamond_pants"         ],[ [-1,a+"leggingsDiamond"        ],[0,ma+"diamond_leggings"] ]);
ADD([T,"gold_pants"            ],[ [-1,a+"leggingsGold"           ],[0,ma+"gold_leggings"] ]);
ADD([T,"iron_pants"            ],[ [-1,a+"leggingsIron"           ],[0,ma+"iron_leggings"] ]);
ADD([T,"chain_boots"           ],[ [-1,a+"bootsChain"             ],[0,ma+"chainmail_boots"] ]);
ADD([T,"leather_boots"         ],[ [-1,a+"bootsCloth"             ],[0,ma+"leather_boots"] ]);
ADD([T,"leather_boots_overlay" ],[ [-1,a+"bootsCloth_overlay"     ],[0,ma+"leather_boots_overlay"] ]);
ADD([T,"diamond_boots"         ],[ [-1,a+"bootsDiamond"           ],[0,ma+"diamond_boots"] ]);
ADD([T,"gold_boots"            ],[ [-1,a+"bootsGold"              ],[0,ma+"gold_boots"] ]);
ADD([T,"iron_boots"            ],[ [-1,a+"bootsIron"              ],[0,ma+"iron_boots"] ]);

/* ==== Блоки предметы ==== */
ADD([T,"bed"         ],[ [-1,a+"bed"           ],[0,ma+"bed"] ]);
ADD([T,"brewingstand"],[ [-1,a+"brewingStand"  ],[0,ma+"brewing_stand"] ]);
ADD([T,"cauldron"    ],[ [-1,a+"cauldron"      ],[0,ma+"cauldron"] ]);
ADD([T,"hopper"      ],[ [-1,a+"hopper"        ],[0,ma+"hopper"] ]);
ADD([T,"comparator"  ],[ [-1,a+"comparator"    ],[0,ma+"comparator"] ]);
ADD([T,"repeater"    ],[ [-1,a+"diode"         ],[0,ma+"repeater"] ]);
ADD([T,"iron_door"   ],[ [-1,a+"doorIron"      ],[0,ma+"door_iron"] ]);
ADD([T,"oak_door"    ],[ [-1,a+"doorWood"      ],[0,ma+"door_wood"] ]);
ADD([T,"pot"         ],[ [-1,a+"flowerPot"     ],[0,ma+"flower_pot"] ]);
ADD([T,"itemframe"   ],[ [-1,a+"frame"         ],[0,ma+"item_frame"] ]);
ADD([T,"painting"    ],[ [-1,a+"painting"      ],[0,ma+"painting"] ]);
ADD([T,"oak_sign"    ],[ [-1,a+"sign"          ],[0,ma+"sign"] ]);
ADD([T,"head"        ],[ [-1,a+"skull_char"    ],[0,ma+"skull_steve"] ]);
ADD([T,"head_creeper"],[ [-1,a+"skull_creeper" ],[0,ma+"skull_creeper"] ]);
ADD([T,"skull"       ],[ [-1,a+"skull_skeleton"],[0,ma+"skull_skeleton"] ]);
ADD([T,"skull_wither"],[ [-1,a+"skull_wither"  ],[0,ma+"skull_wither"] ]);
ADD([T,"head_zombie" ],[ [-1,a+"skull_zombie"  ],[0,ma+"skull_zombie"] ]);

/* ==== Сущности предметы ==== */
ADD([T,"boat"            ],[ [-1,a+"boat"           ],[0,ma+"boat"] ]);
ADD([T,"minecart"        ],[ [-1,a+"minecart"       ],[0,ma+"minecart_normal"] ]);
ADD([T,"minecart_chest"  ],[ [-1,a+"minecartChest"  ],[0,ma+"minecart_chest"] ]);
ADD([T,"minecart_furnace"],[ [-1,a+"minecartFurnace"],[0,ma+"minecart_furnace"] ]);
ADD([T,"minecart_hopper" ],[ [-1,a+"minecartHopper" ],[0,ma+"minecart_hopper"] ]);
ADD([T,"minecart_tnt"    ],[ [-1,a+"minecartTnt"    ],[0,ma+"minecart_tnt"] ]);

/*1.7.2*/
ADD([T,"minecart_command"],[ [1,ma+"minecart_command_block"] ]);

/* ==== Ресурсы ==== */
ADD([T,"stick"              ],[ [-1,a+"stick"              ],[0,ma+"stick"] ]);
ADD([T,"string"             ],[ [-1,a+"string"             ],[0,ma+"string"] ]);
ADD([T,"sugar"              ],[ [-1,a+"sugar"              ],[0,ma+"sugar"] ]);
ADD([T,"gunpowder"          ],[ [-1,a+"sulphur"            ],[0,ma+"gunpowder"] ]);
ADD([T,"gold"               ],[ [-1,a+"ingotGold"          ],[0,ma+"gold_ingot"] ]);
ADD([T,"gold_nugget"        ],[ [-1,a+"goldNugget"         ],[0,ma+"gold_nugget"] ]);
ADD([T,"iron"               ],[ [-1,a+"ingotIron"          ],[0,ma+"iron_ingot"] ]);
ADD([T,"blaze"              ],[ [-1,a+"blazeRod"           ],[0,ma+"blaze_rod"] ]);
ADD([T,"blaze_powder"       ],[ [-1,a+"blazePowder"        ],[0,ma+"blaze_powder"] ]);
ADD([T,"bone"               ],[ [-1,a+"bone"               ],[0,ma+"bone"] ]);
ADD([T,"book"               ],[ [-1,a+"book"               ],[0,ma+"book_normal"] ]);
ADD([T,"bowl"               ],[ [-1,a+"bowl"               ],[0,ma+"bowl"] ]);
ADD([T,"clay"               ],[ [-1,a+"clay"               ],[0,ma+"clay_ball"] ]);
ADD([T,"brick"              ],[ [-1,a+"brick"              ],[0,ma+"brick"] ]);
ADD([T,"coal"               ],[ [-1,a+"coal"               ],[0,ma+"coal"] ]);
ADD([T,"diamond"            ],[ [-1,a+"diamond"            ],[0,ma+"diamond"] ]);
ADD([T,"ink"                ],[ [-1,a+"dyePowder_black"    ],[0,ma+"dye_powder_black"] ]);
ADD([T,"lapis"              ],[ [-1,a+"dyePowder_blue"     ],[0,ma+"dye_powder_blue"] ]);
ADD([T,"cocoa"              ],[ [-1,a+"dyePowder_brown"    ],[0,ma+"dye_powder_brown"] ]);
ADD([T,"cyan"               ],[ [-1,a+"dyePowder_cyan"     ],[0,ma+"dye_powder_cyan"] ]);
ADD([T,"gray"               ],[ [-1,a+"dyePowder_gray"     ],[0,ma+"dye_powder_gray"] ]);
ADD([T,"green"              ],[ [-1,a+"dyePowder_green"    ],[0,ma+"dye_powder_green"] ]);
ADD([T,"aqua"               ],[ [-1,a+"dyePowder_lightBlue"],[0,ma+"dye_powder_lightBlue"] ]);
ADD([T,"lime"               ],[ [-1,a+"dyePowder_lime"     ],[0,ma+"dye_powder_lime"] ]);
ADD([T,"magenta"            ],[ [-1,a+"dyePowder_magenta"  ],[0,ma+"dye_powder_magenta"] ]);
ADD([T,"orange"             ],[ [-1,a+"dyePowder_orange"   ],[0,ma+"dye_powder_orange"] ]);
ADD([T,"pink"               ],[ [-1,a+"dyePowder_pink"     ],[0,ma+"dye_powder_pink"] ]);
ADD([T,"purple"             ],[ [-1,a+"dyePowder_purple"   ],[0,ma+"dye_powder_purple"] ]);
ADD([T,"red"                ],[ [-1,a+"dyePowder_red"      ],[0,ma+"dye_powder_red"] ]);
ADD([T,"silver"             ],[ [-1,a+"dyePowder_silver"   ],[0,ma+"dye_powder_silver"] ]);
ADD([T,"bonedust"           ],[ [-1,a+"dyePowder_white"    ],[0,ma+"dye_powder_white"] ]);
ADD([T,"yellow"             ],[ [-1,a+"dyePowder_yellow"   ],[0,ma+"dye_powder_yellow"] ]);
ADD([T,"egg"                ],[ [-1,a+"egg"                ],[0,ma+"egg"] ]);
ADD([T,"emerald"            ],[ [-1,a+"emerald"            ],[0,ma+"emerald"] ]);
ADD([T,"endereye"           ],[ [-1,a+"enderPearl"         ],[0,ma+"ender_pearl"] ]);
ADD([T,"endeye"             ],[ [-1,a+"eyeOfEnder"         ],[0,ma+"ender_eye"] ]);
ADD([T,"feather"            ],[ [-1,a+"feather"            ],[0,ma+"feather"] ]);
ADD([T,"spidereye_fermented"],[ [-1,a+"fermentedSpiderEye" ],[0,ma+"spider_eye_fermented"] ]);
ADD([T,"fire"               ],[ [-1,a+"fireball"           ],[0,ma+"fireball"] ]);
ADD([T,"flint"              ],[ [-1,a+"flint"              ],[0,ma+"flint"] ]);
ADD([T,"tear"               ],[ [-1,a+"ghastTear"          ],[0,ma+"ghast_tear"] ]);
ADD([T,"bottle"             ],[ [-1,a+"glassBottle"        ],[0,ma+"potion_bottle_empty"] ]);
ADD([T,"leather"            ],[ [-1,a+"leather"            ],[0,ma+"leather"] ]);
ADD([T,"magma"              ],[ [-1,a+"magmaCream"         ],[0,ma+"magma_cream"] ]);
ADD([T,"netherbrick"        ],[ [-1,a+"netherbrick"        ],[0,ma+"netherbrick"] ]);
ADD([T,"quartz"             ],[ [-1,a+"netherquartz"       ],[0,ma+"quartz"] ]);
ADD([T,"wart"               ],[ [-1,a+"netherStalkSeeds"   ],[0,ma+"nether_wart"] ]);
ADD([T,"netherstar"         ],[ [-1,a+"netherStar"         ],[0,ma+"nether_star"] ]);
ADD([T,"paper"              ],[ [-1,a+"paper"              ],[0,ma+"paper"] ]);
ADD([T,"redstone"           ],[ [-1,a+"redstone"           ],[0,ma+"redstone_dust"] ]);
ADD([T,"sugarcane"          ],[ [-1,a+"reeds"              ],[0,ma+"reeds"] ]);
ADD([T,"ruby"               ],[ [-1,a+"ruby"               ],[0,ma+"ruby"] ]);
ADD([T,"seeds"              ],[ [-1,a+"seeds"              ],[0,ma+"seeds_wheat"] ]);
ADD([T,"seeds_watermelon"   ],[ [-1,a+"seeds_melon"        ],[0,ma+"seeds_melon"] ]);
ADD([T,"seeds_pumpkin"      ],[ [-1,a+"seeds_pumpkin"      ],[0,ma+"seeds_pumpkin"] ]);
ADD([T,"slime"              ],[ [-1,a+"slimeball"          ],[0,ma+"slimeball"] ]);
ADD([T,"snow"               ],[ [-1,a+"snowball"           ],[0,ma+"snowball"] ]);
ADD([T,"watermelon_gold"    ],[ [-1,a+"speckledMelon"      ],[0,ma+"melon_speckled"] ]);
ADD([T,"wheat"              ],[ [-1,a+"wheat"              ],[0,ma+"wheat"] ]);
ADD([T,"glowstone"          ],[ [-1,a+"yellowDust"         ],[0,ma+"glowstone_dust"] ]);

/*1.6.1*/
ADD([T,"coal_wood"          ],[ [ 0,ma+"charcoal"          ] ]);

/* ==== Остальное ==== */
ADD([T,"book_enchantment"     ],[ [-1,a+"enchantedBook"          ],[0,ma+"book_enchanted"] ]);
ADD([T,"book_writable"        ],[ [-1,a+"writingBook"            ],[0,ma+"book_writable"] ]);
ADD([T,"book_written"         ],[ [-1,a+"writtenBook"            ],[0,ma+"book_written"] ]);
ADD([T,"bottle_xp"            ],[ [-1,a+"expBottle"              ],[0,ma+"experience_bottle"] ]);
ADD([T,"firework"             ],[ [-1,a+"fireworks"              ],[0,ma+"fireworks"] ]);
ADD([T,"firework_base"        ],[ [-1,a+"fireworksCharge"        ],[0,ma+"fireworks_charge"] ]);
ADD([T,"firework_base_overlay"],[ [-1,a+"fireworksCharge_overlay"],[0,ma+"fireworks_charge_overlay"] ]);
ADD([T,"spawn"                ],[ [-1,a+"monsterPlacer"          ],[0,ma+"spawn_egg"] ]);
ADD([T,"spawn_overlay"        ],[ [-1,a+"monsterPlacer_overlay"  ],[0,ma+"spawn_egg_overlay"] ]);
ADD([T,"record_11"            ],[ [-1,a+"record_11"              ],[0,ma+"record_11"] ]);
ADD([T,"record_13"            ],[ [-1,a+"record_13"              ],[0,ma+"record_13"] ]);
ADD([T,"record_blocks"        ],[ [-1,a+"record_blocks"          ],[0,ma+"record_blocks"] ]);
ADD([T,"record_cat"           ],[ [-1,a+"record_cat"             ],[0,ma+"record_cat"] ]);
ADD([T,"record_chirp"         ],[ [-1,a+"record_chirp"           ],[0,ma+"record_chirp"] ]);
ADD([T,"record_far"           ],[ [-1,a+"record_far"             ],[0,ma+"record_far"] ]);
ADD([T,"record_mall"          ],[ [-1,a+"record_mall"            ],[0,ma+"record_mall"] ]);
ADD([T,"record_mellohi"       ],[ [-1,a+"record_mellohi"         ],[0,ma+"record_mellohi"] ]);
ADD([T,"record_stal"          ],[ [-1,a+"record_stal"            ],[0,ma+"record_stal"] ]);
ADD([T,"record_strad"         ],[ [-1,a+"record_strad"           ],[0,ma+"record_strad"] ]);
ADD([T,"record_wait"          ],[ [-1,a+"record_wait"            ],[0,ma+"record_wait"] ]);
ADD([T,"record_ward"          ],[ [-1,a+"record_ward"            ],[0,ma+"record_ward"] ]);
ADD([T,"saddle"               ],[ [-1,a+"saddle"                 ],[0,ma+"saddle"] ]);
ADD([T,"slot_boots"           ],[ [-1,a+"slot_empty_boots"       ],[0,ma+"empty_armor_slot_boots"] ]);
ADD([T,"slot_chest"           ],[ [-1,a+"slot_empty_chestplate"  ],[0,ma+"empty_armor_slot_chestplate"] ]);
ADD([T,"slot_helmet"          ],[ [-1,a+"slot_empty_helmet"      ],[0,ma+"empty_armor_slot_helmet"] ]);
ADD([T,"slot_pants"           ],[ [-1,a+"slot_empty_leggings"    ],[0,ma+"empty_armor_slot_leggings"] ]);

/*1.6.1*/
ADD([T,"horsearmor_iron"      ],[ [ 0,ma+"iron_horse_armor"] ]);
ADD([T,"horsearmor_gold"      ],[ [ 0,ma+"gold_horse_armor"] ]);
ADD([T,"horsearmor_diamond"   ],[ [ 0,ma+"diamond_horse_armor"] ]);

/* Environment Minecraft */ /* ======================================== */
T = "environment";
ma = mte;

/* ==== Колормапы ==== */
ADD([T,"colormap_grass"  ],[ [ 0,mt+"colormap/grass"] ]);
ADD([T,"colormap_foliage"],[ [ 0,mt+"colormap/foliage"] ]);

/* ==== Остальное ==== */
ADD([T ,"rain"       ],[ [ 0,ma+"rain"] ]);
ADD([T ,"snow"       ],[ [ 0,ma+"snow"] ]);
ADD([T ,"moon_phases"],[ [ 0,ma+"moon_phases"] ]);
ADD([T ,"sun"        ],[ [ 0,ma+"sun"] ]);
ADD([T ,"clouds"     ],[ [ 0,ma+"clouds"] ]);
ADD([To,"sky_end"    ],[ [ 0,ma+"end_sky"] ]);

/* Шрифт Minecraft */ /* ======================================== */
T = "font";
ma = mtf;

ADD([T,"ascii"],[ [ 0,ma+"ascii"] ]);

/* Сущности Minecraft */ /* ======================================== */
T = "mob";
ma = mten;

/* ==== Игрок ==== */
ADD([T,"player_old"],[ [ 0,ma+"steve"] ]);

/* ==== Нейтральные мобы ==== */
ADD([T,"bat"                   ],[ [ 0,ma+"bat"] ]);
ADD([T,"chicken"               ],[ [ 0,ma+"chicken"] ]);
ADD([T,"golem_iron"            ],[ [ 0,ma+"iron_golem"] ]);
ADD([T,"golem_snow"            ],[ [ 0,ma+"snowman"] ]);
ADD([T,"squid"                 ],[ [ 0,ma+"squid"] ]);
ADD([T,"ocelot"                ],[ [ 0,ma+"cat/ocelot"] ]);
ADD([T,"cat"                   ],[ [ 0,ma+"cat/red"] ]);
ADD([T,"cat_black"             ],[ [ 0,ma+"cat/black"] ]);
ADD([T,"cat_siamese"           ],[ [ 0,ma+"cat/siamese"] ]);
ADD([T,"cow"                   ],[ [ 0,ma+"cow/cow"] ]);
ADD([T,"cow_red"               ],[ [ 0,ma+"cow/mooshroom"] ]);
ADD([T,"pig"                   ],[ [ 0,ma+"pig/pig"] ]);
ADD([T,"pig_saddle"            ],[ [ 0,ma+"pig/pig_saddle"] ]);
ADD([T,"sheep"                 ],[ [ 0,ma+"sheep/sheep"] ]);
ADD([T,"sheep_overlay"         ],[ [ 0,ma+"sheep/sheep_fur"] ]);
ADD([T,"villager_old"          ],[ [ 0,ma+"villager/villager"] ]);
ADD([T,"villager_old_butcher"  ],[ [ 0,ma+"villager/butcher"] ]);
ADD([T,"villager_old_farmer"   ],[ [ 0,ma+"villager/farmer"] ]);
ADD([T,"villager_old_librarian"],[ [ 0,ma+"villager/librarian"] ]);
ADD([T,"villager_old_priest"   ],[ [ 0,ma+"villager/priest"] ]);
ADD([T,"villager_old_smith"    ],[ [ 0,ma+"villager/smith"] ]);
ADD([T,"wolf"                  ],[ [ 0,ma+"wolf/wolf"] ]);
ADD([T,"wolf_angry"            ],[ [ 0,ma+"wolf/wolf_angry"] ]);
ADD([T,"wolf_pet"              ],[ [ 0,ma+"wolf/wolf_tame"] ]);
ADD([T,"wolf_pet_overlay"      ],[ [ 0,ma+"wolf/wolf_collar"] ]);

/* ==== Враждебные мобы ==== */
ADD([T,"creeper"              ],[ [ 0,ma+"creeper/creeper"] ]);
ADD([T,"creeper_power"        ],[ [ 0,ma+"creeper/creeper_armor"] ]);
ADD([T,"enderdragon"          ],[ [ 0,ma+"enderdragon/dragon"] ]);
ADD([T,"enderdragon_eyes"     ],[ [ 0,ma+"enderdragon/dragon_eyes"] ]);
ADD([T,"enderdragon_exploding"],[ [ 0,ma+"enderdragon/dragon_exploding"] ]);
ADD([T,"enderman"             ],[ [ 0,ma+"enderman/enderman"] ]);
ADD([T,"enderman_eyes"        ],[ [ 0,ma+"enderman/enderman_eyes"] ]);
ADD([T,"ghast"                ],[ [ 0,ma+"ghast/ghast"] ]);
ADD([T,"ghast_shooting"       ],[ [ 0,ma+"ghast/ghast_shooting"] ]);
ADD([T,"skeleton"             ],[ [ 0,ma+"skeleton/skeleton"] ]);
ADD([T,"skeleton_wither"      ],[ [ 0,ma+"skeleton/wither_skeleton"] ]);
ADD([T,"slime"                ],[ [ 0,ma+"slime/slime"] ]);
ADD([T,"magma"                ],[ [ 0,ma+"slime/magmacube"] ]);
ADD([T,"spider"               ],[ [ 0,ma+"spider/spider"] ]);
ADD([T,"spider_cave"          ],[ [ 0,ma+"spider/cave_spider"] ]);
ADD([T,"spider_eyes"          ],[ [ 0,ma+"spider_eyes"] ]);
ADD([T,"wither"               ],[ [ 0,ma+"wither/wither"] ]);
ADD([T,"wither_power"         ],[ [ 0,ma+"wither/wither_armor"] ]);
ADD([T,"wither_invulnerable"  ],[ [ 0,ma+"wither/wither_invulnerable"] ]);
ADD([T,"zombie"               ],[ [ 0,ma+"zombie/zombie"] ]);
ADD([T,"zombie_villager"      ],[ [ 0,ma+"zombie/zombie_villager"] ]);
ADD([T,"blaze"                ],[ [ 0,ma+"blaze"] ]);
ADD([T,"silverfish"           ],[ [ 0,ma+"creeper/silverfish"] ]);
ADD([T,"witch"                ],[ [ 0,ma+"creeper/witch"] ]);
ADD([T,"zombie_pig"           ],[ [ 0,ma+"creeper/zombie_pigman"] ]);

T = Te;

/* ==== Энтити ==== */
ADD([T,"arrow"            ],[ [ 0,ma+"arrow"] ]);
ADD([T,"boat"             ],[ [ 0,ma+"boat"] ]);
ADD([T,"minecart"         ],[ [ 0,ma+"minecart"] ]);
ADD([T,"oak_sign"         ],[ [ 0,ma+"sign"] ]);
ADD([T,"chest"            ],[ [ 0,ma+"chest/normal"] ]);
ADD([T,"chest_double"     ],[ [ 0,ma+"chest/normal_double"] ]);
ADD([T,"chest_trap"       ],[ [ 0,ma+"chest/trapped"] ]);
ADD([T,"chest_trap_double"],[ [ 0,ma+"chest/trapped_double"] ]);
ADD([T,"chest_ender"      ],[ [ 0,ma+"chest/ender"] ]);
ADD([T,"chest_xmas"       ],[ [ 0,ma+"chest/christmas"] ]);
ADD([T,"chest_xmas_double"],[ [ 0,ma+"chest/christmas_double"] ]);
ADD([T,"endercrystal"     ],[ [ 0,ma+"endercrystal/endercrystal"] ]);

T = Tp;

/* ==== Эффектовые энтити ==== */
ADD([T  ,"beam"             ],[ [ 0,ma+"beacon_beam"                   ] ]);
ADD([T  ,"beam_endercrystal"],[ [ 0,ma+"endercrystal/endercrystal_beam"] ]);
ADD([T  ,"book"             ],[ [ 0,ma+"enchanting_table_book"         ] ]);
ADD([Ten,"endportal"        ],[ [ 0,ma+"end_portal"                    ] ]);
ADD([T  ,"xp"               ],[ [ 0,ma+"experience_orb"                ] ]);
ADD([T  ,"explosion"        ],[ [ 0,ma+"explosion"                     ] ]);
ADD([T  ,"lead"             ],[ [ 0,ma+"lead"                          ] ]);

/* Интерфейс Minecraft */ /* ======================================== */
ma = mtg;
T = Tg;

/* ==== Главное ==== */
ADD([T,"background"         ],[ [ 0,ma+"options_background"         ] ]);
ADD([T,"widgets"            ],[ [ 0,ma+"widgets"                    ] ]);
ADD([T,"icons"              ],[ [ 0,ma+"icons"                      ] ]);
ADD([T,"loadingscreen"      ],[ [ 0,ma+"title/mojang"               ] ]);
ADD([T,"title_default"      ],[ [ 0,ma+"title/minecraft"            ] ]);

/* ==== Интерфейс ==== */
ADD([T,"book"            ],[ [ 0,ma+"book"                              ] ]);
ADD([T,"achievements_old"],[ [ 0,ma+"achievement/achievement_background"] ]);
ADD([T,"anvil"           ],[ [ 0,ma+"container/anvil"                   ] ]);
ADD([T,"beacon"          ],[ [ 0,ma+"container/beacon"                  ] ]);
ADD([T,"brewingstand"    ],[ [ 0,ma+"container/brewing_stand"           ] ]);
ADD([T,"craftingtable"   ],[ [ 0,ma+"container/crafting_table"          ] ]);
ADD([T,"dispenser"       ],[ [ 0,ma+"container/dispenser"               ] ]);
ADD([T,"enchantingtable" ],[ [ 0,ma+"container/enchanting_table"        ] ]);
ADD([T,"furnace"         ],[ [ 0,ma+"container/furnace"                 ] ]);
ADD([T,"chest"           ],[ [ 0,ma+"container/generic_54"              ] ]);
ADD([T,"hopper"          ],[ [ 0,ma+"container/hopper"                  ] ]);
ADD([T,"horse"           ],[ [ 0,ma+"container/horse"                   ] ]);
ADD([T,"inventory_old"   ],[ [ 0,ma+"container/inventory"               ] ]);
ADD([T,"stats"           ],[ [ 0,ma+"container/stats_icons"             ] ]);
ADD([T,"villager_old"    ],[ [ 0,ma+"container/villager"                ] ]);

/* ==== Креатив ==== */
ADD([T,"creative"          ],[ [ 0,ma+"container/creative_inventory/tab_items"       ] ]);
ADD([T,"creative_search"   ],[ [ 0,ma+"container/creative_inventory/tab_item_search" ] ]);
ADD([T,"creative_inventory"],[ [ 0,ma+"container/creative_inventory/tab_inventory"   ] ]);
ADD([T,"creative_tabs"     ],[ [ 0,ma+"container/creative_inventory/tabs"            ] ]);

/* ==== Остальное ==== */
ADD([To,"panorama_mainmenu_0"],[ [ 0,ma+"title/background/panorama_0"] ]);
ADD([To,"panorama_mainmenu_1"],[ [ 0,ma+"title/background/panorama_1"] ]);
ADD([To,"panorama_mainmenu_2"],[ [ 0,ma+"title/background/panorama_2"] ]);
ADD([To,"panorama_mainmenu_3"],[ [ 0,ma+"title/background/panorama_3"] ]);
ADD([To,"panorama_mainmenu_4"],[ [ 0,ma+"title/background/panorama_4"] ]);
ADD([To,"panorama_mainmenu_5"],[ [ 0,ma+"title/background/panorama_5"] ]);
ADD([T ,"demo"],[ [ 0,ma+"demo_background"] ]);

/*1.7.2*/
ADD([T ,"select_pack"],[ [ 1,ma+"resource_packs"] ]);

/*1.7.4*/
ADD([T ,"stream"     ],[ [ 1.1,ma+"stream_indicator"] ]);

/* Картины Minecraft */ /* ======================================== */
ma = mtpaint;
T = Tpa;

/* ==== Атлас картин ==== */
ADD([T,"atlas"],[ [ 0,ma+"paintings_kristoffer_zetterstrand"] ]);

/* Партиклы Minecraft */ /* ======================================== */
ma = mtp;
T = Tp;

/* ==== Атлас партиклов ==== */
ADD([T,"atlas_old"],[ [ 0,ma+"particles"] ]);

/* Модели Minecraft */ /* ======================================== */
ma = mta;
T = Ta;

/* ==== Броня ==== */
ADD([Ta,"chain"                ],[ [ 0,ma+"chainmail_layer_1"      ] ]);
ADD([Ta,"chain_pants"          ],[ [ 0,ma+"chainmail_layer_2"      ] ]);
ADD([Ta,"diamond"              ],[ [ 0,ma+"diamond_layer_1"        ] ]);
ADD([Ta,"diamond_pants"        ],[ [ 0,ma+"diamond_layer_2"        ] ]);
ADD([Ta,"gold"                 ],[ [ 0,ma+"gold_layer_1"           ] ]);
ADD([Ta,"gold_pants"           ],[ [ 0,ma+"gold_layer_2"           ] ]);
ADD([Ta,"iron"                 ],[ [ 0,ma+"iron_layer_1"           ] ]);
ADD([Ta,"iron_pants"           ],[ [ 0,ma+"iron_layer_2"           ] ]);
ADD([Ta,"leather"              ],[ [ 0,ma+"leather_layer_1"        ] ]);
ADD([Ta,"leather_pants"        ],[ [ 0,ma+"leather_layer_2"        ] ]);
ADD([Ta,"leather_overlay"      ],[ [ 0,ma+"leather_layer_1_overlay"] ]);
ADD([Ta,"leather_pants_overlay"],[ [ 0,ma+"leather_layer_2_overlay"] ]);

/* Другое Minecraft */ /* ======================================== */
ma = mt;

/* ==== Карта ==== */
ADD([Tg,"map"          ],[ [ 0,ma+"map/map_background"] ]);
ADD([Tg,"map_icons_old"],[ [ 0,ma+"map/map_icons"     ] ]);

/* ==== Папка Misc ==== */
ma = mtm;
ADD([Tg,"overlay_pumpkin"],[ [ 0,ma+"pumpkinblur"         ] ]);
ADD([Tg,"unknown"        ],[ [ 0,ma+"unknown_pack"        ] ]);
ADD([To,"enchant"        ],[ [ 0,ma+"enchanted_item_glint"] ]);
ADD([To,"vignette"       ],[ [ 0,ma+"vignette"            ] ]);
ADD([Tp,"shadow"         ],[ [ 0,ma+"shadow"              ] ]);
ADD([Tb,"water_old"      ],[ [ 0,ma+"underwater"          ] ]);