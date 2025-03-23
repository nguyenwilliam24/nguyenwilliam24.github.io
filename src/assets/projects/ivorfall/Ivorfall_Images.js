import weapon_mods_prototype from './WeaponMods/Ivorfall_WeaponMods_Prototype.mp4'
import weapon_mods_prototype_v2 from './WeaponMods/Ivorfall_WeaponMods_Prototype_v2.mp4'
import weapon_mods_prototype_final from './WeaponMods/Ivorfall_WeaponMods_Final.mp4'

import weapon_mods_details_prototype from './WeaponMods/Ivorfall_Mod_Details_Prototype.png'
import weapon_mods_details_final from './WeaponMods/Ivorfall_Mod_Details_Final.png'
import weapon_mods_header from './WeaponMods/Ivorfall_Mod_Header.png'
import weapon_mods_damage_table from './WeaponMods/Ivorfall_Mod_Damage_Table.png'


import combat_manager_off from './CombatManager/Ivorfall_Combat_Manager_Off.mp4'
import combat_manager_on from './CombatManager/Ivorfall_Combat_Manager_On.mp4'
import combat_manager_header from './CombatManager/Ivorfall_Combat_Manager_Header.png'
import combat_manager_cpp from './CombatManager/Ivorfall_Combat_Manager_CPP.png'
import combat_manager_tokens from './CombatManager/Ivorfall_Combat_Manager_Tokens.png'

export const weapon_mods_videos = [
    {
        original: weapon_mods_prototype,
        orignalHeight: "640px",
        description: "Initial Weapon Mods System Prototype. Very simple can equip and shoot.",
        type: "video"
    },
    {
        original: weapon_mods_prototype_v2,
        orignalHeight: "640px",
        description: "More Polished Prototype around the Greenlit stage. That had Ammo and different Firing Types",
        type: "video"
    },
    {
        original: weapon_mods_prototype_final,
        orignalHeight: "640px",
        description: "Final version that was shipped with the game on Steam. Supports Primary and Secondary Combinations.",
        type: "video"
    }
]

export const weapon_mods_images = [
    {
        original: weapon_mods_details_prototype,
        orignalHeight: "640px",
        description: "Details panel for a Weapon Mod during the Prototype",
        type: "image"
    },
    {
        original: weapon_mods_details_final,
        orignalHeight: "640px",
        description: "Final version where I simplified and moved firing logic out of Mod Class and into the Firing Ability Class",
        type: "image"
    },
    {
        original: weapon_mods_header,
        orignalHeight: "640px",
        description: "C++ Header file for the base InquiryMod class after converting from Blueprints",
        type: "image"
    },
    {
        original: weapon_mods_damage_table,
        orignalHeight: "640px",
        description: "Table containing list of values representing Damage dealt by Mods. Easily changeable by Designers.",
        type: "image"
    },
]

export const combat_manager_videos = [
    {
        original: combat_manager_off,
        orignalHeight: "640px",
        description: "Combat Manager is off by having 0 Tokens available. All enemies are in the waiting state. Some move others dont.",
        type: "video"
    },
    {
        original: combat_manager_on,
        orignalHeight: "640px",
        description: "By changing the number of Tokens. Combat can change drastically based on the number of enemies.",
        type: "video"
    }
]

export const combat_manager_images = [
    {
        original: combat_manager_header,
        orignalHeight: "640px",
        description: "C++ Header file for the Combat Manager specifying the API",
        type: "image"
    },
    {
        original: combat_manager_cpp,
        orignalHeight: "640px",
        description: "The implementation where I keep track of a HashMap of current Requesters and the current Token Pool",
        type: "image"
    },
    {
        original: combat_manager_tokens,
        orignalHeight: "640px",
        description: "In Editor Config for setting the initial pool of Tokens",
        type: "image"
    }
]

const Ivorfall_Images = [

]

export default Ivorfall_Images;