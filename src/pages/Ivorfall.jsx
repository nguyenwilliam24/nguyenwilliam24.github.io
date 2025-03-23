import React from 'react'
import './Ivorfall.css'
import PageLayout from '../layout/PageLayout'
import ProjectHeader from '../components/Project/ProjectHeader'
import ResponsivePlayer from '../components/Responsive/ResponsivePlayer'
import ExternalLinkText from '../components/ExternalLinkText/ExternalLinkText'
import ImageGallery from 'react-image-gallery'
import { weapon_mods_videos, weapon_mods_images, combat_manager_images, combat_manager_videos } from '../assets/projects/ivorfall/Ivorfall_Images'
import VideoGallery from '../components/VideoGallery/VideoGallery'

const Ivorfall = () => {
  return (
    <PageLayout title="Ivorfall">
      <ProjectHeader role="Lead Gameplay Programmer (Team of 26)" engine="Unreal Engine 5" platform="Windows" skills={["C++/Blueprints Workflow", "Interdisciplinary Teamwork", "Leadership", "Agile Development"]}/>
      <ResponsivePlayer url="https://www.youtube.com/watch?v=T3faHrBHFx8"/>
      <ExternalLinkText href="https://store.steampowered.com/app/2901040/Ivorfall/" text="Steam Store Page"/>

      <p>
        Ivorfall is a EAE Capstone project at the University of Utah for the year 2023-2024.
        Ivorfall is a isometric twinstick roguelike shooter where you play as a trigger happy detective trying to solve a mystery set in a steampunk city.
        The gameplay is inspired by games like Hades, RUINER, and Doom.
        The prototype that was made in 2 weeks with a team of 13 in order to demonstrate the capabilities of both the team and prove the game's concept to the professors and an industry panel.
        This was 1 of 16 prototypes where only 8 of them would be greenlit for full production for the rest of the school year.
        Upon being greenlit for begin full production, the team's size doubled to 26.
      </p>

      <p>
        I loved my time on Ivorfall, particularly working on the Weapon Modification System.
        This system was central to the gameplay experience in Ivorfall.
        Players constantly picked up different modifications, making it a key part of the gameplay loop.
        Designers had a greate time creating fun and unique combinations that made players feel powerful sometimes too powerful.
        The full school year of development allowed me and the team to refine and polish both the gameplay mechanics and the underlying implementation.
        The prototype for the system was assembled and functional, but wasn't ready for further expansion at that stage.
      </p>

      <VideoGallery items={weapon_mods_videos}/>

      <p>
        Originally, the system was designed to be extremely flexible, allowing modifications to be stackable and enhance the pistol in various ways.
        However, during the first few playtests, players felt like the modifications (mods) were too tedious to pick up and lacked impact.
        Design and Programming got together to discuss redesigning the system to provide a better sense of power for the player.
        We ultimately decided to go with a two-mod class design: Primary and Secondary.
        A Primary class mod function like a barrel modification, permanently altering how the weapon fired.
        A Secondary class mod would be more akin to ammo/bullets, such as oil pellets, electricity, and rockets.
        Implementing this design was relatively straightforward due to the separation.
        A Primary mod would define the projectile's movement and speed while the Secondary mod would determine the type of damage/effects upon impact.
        I needed to only ensure that there was one of each mod class equipped at a time and when the Secondary ran out of ammo then it would be unequipped.
      </p>

      <p>
        We had biweekly playtests with the rest of the Capstone class for the school year, during which we received continous feedback on the game.
        Based on this feedback and footage of players interacting with the game, it became clear that the mods still lacked impact.
        Players weren't immediately drawn to the mods, as they seemed to be a nice addition rather than a necessity.
        The team wanted mods to feel more powerful and sometimes a must have.
        Design proposed an idea: what if each unique pairing of a Primary and Secondary mod gave the weapon an entirely different behavior?
        This approach was eventaully adopted and shipped with the game.
        Primary Mods effectively became distinct weapon types, while Secondary Mods in combination with a Primary Mod, altered not only the projectile but also its firing mechanics and additional effects.
      </p>

      <p>
        In the final implementation, I used a hash map to map a Primary mod class to one of the possible Secondary mod classes.
        When the Player equips a Secondary Mod the Primary Mod looks up the appropriate combination mode in the table.
        These combination modes were implemented as a separate class from the Weapon class, handling the internal logic whether or not it spawned a projectile or raycast for hits.
        The Weapon class managed the ammo and let the combination mode to execute its logic.
      </p>

      <ImageGallery items={weapon_mods_images} showPlayButton={false} showIndex={true} showBullets={true}/>

      <p>
        For example the flamethrower combination is sweeping the area where the fire is supposed to be on an interval for targets.
        If targets are found then raycasts are sent out to each target to ensure the player does not applying damage through walls.
        The oil artillery shot is spawning a projectile that follows a parabolic trajectory and upon impact activates a sphere used for collisions waiting for overlap events.
        Upon receiving an overlap event it will apply a slowing damage effect to the target for as long as it is overlaping the oil.
        As a Lead on the project, I was the main programmer responsible for implementing the mods system above.
        I also taught other programmers and designers on how to use the system and create new combinations.
      </p>

      <p>
        While the Player side of things were progressing very smoothly, things were not so good on the Enemy side.
        During Playtests, players were feeling powerful and having fun interacting with the weapon mods system.
        Enemies and enemy variety were a big problem as shooting the same 100 Health thug would get boring really fast.
        The project couldn't afford any more feature creep as it was taking a long time to create assets.
        I and a few other members of the team proposed what if the enemies used mods just like the Player but in a more limited capacity.
        They agreed as the enemy variety was definitely an issue and this solution would not generate a lot more work for everyone.
        So from here on out, I assisted the AI engineers to adapt the mods system for enemies but without the combination aspects.
      </p>

      <p>
        The last thing I assisted on with the Enemies was helping on the creation of a Combat Manager System.
        Before this system was created combat in the game was a free for all. As soon as any enemy got close they would start attacking.
        This proved to be challenging for the player and they would become easily overwhelmed as more enemies spawned in.
        We wanted to have ways to tune the combat and have it be more manageable without having to spawn less enemies because we liked the horde aspects that we had.
        I started looking at other games espically very combat/enemy heavy focused games. Games like: Spider-Man, God of War, Devil May Cry, Vampire Survivors, Hollow Knight, and list goes on for awhile.
        During my research, I came across two very useful GDC talks from the teams at Insomniac Games and Sony Santa Monica.
        In both of these talks they went into depth about the Combat Systems and their process doing what they did in Spider-Man (2018) and God of War (2018).
        In the Insomniac talk the presenter showcased a clip of their Combat Manager turned off, and it was exactly like how Ivorfall was currently playing out.
        Just chaos and no flow even for a superhero character like Spider-Man which isn't what happens in the real game.
        I showed this clip to the other programmers on my team and they felt like a smiliar system was doable for our game.
        From here we needed to understand what is going on with the combat. I setup a meeting with programmers and designers to discuss the flow of combat.
        How fast did we want it? Do we want peaks and valleys or have it at a constant rate? 
        Understanding what were the requirements of the system and how could it be tunable down the road.
      </p>

      <VideoGallery items={combat_manager_videos}/>

      <p>
        The basics of a Combat Manager type of system revolves around tokens.
        Tokens act as a currency for enemies to pay for their attacks.
        If they cannot afford the cost then they are left in a waiting state.
        If they can pay then they will attempt to attack.
        Tokens are given/acquired based on certain conditions. Things like: line of sight, distance, enemy type, etc.
        The Tokens are constantly being put back into the pool to be given back out.
      </p>

      <ImageGallery items={combat_manager_images}/>

      <p>
        I helped implement the basics for giving and paying of the tokens but the attacks and waiting states were left to the AI programmers on how to handle them.
        The tokens needed to be in a global space where any enemy could attempt to access them. This is where an Unreal Subsystem became very useful that was dedicated to this.
        The initial token pool had to have a starting amount otherwise enemies would never attack
        I initially was thinking about implementing a token pool size that could change between levels but the team suggested I didn't do this.
        As there weren't a lot of levels and we didn't want combat feeling different per level either. I opted for this to be setable from a config file and not hardcoded.
      </p>
    </PageLayout>
  )
}

export default Ivorfall