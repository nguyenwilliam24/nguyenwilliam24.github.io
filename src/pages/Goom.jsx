import React from 'react'
import './Goom.css'
import PageLayout from '../layout/PageLayout'
import ProjectHeader from '../components/Project/ProjectHeader'
import ResponsivePlayer from '../components/Responsive/ResponsivePlayer'
import ExternalLinkText from '../components/ExternalLinkText/ExternalLinkText'
import ImageGallery from 'react-image-gallery'
import VideoGallery from '../components/VideoGallery/VideoGallery'
import { electric_videos, fire_videos, slime_videos, water_videos, chain_lightning_images} from '../assets/projects/goom/Goom_Images'

const Goom = () => {
  return (
    <PageLayout title="Goom">
      <ProjectHeader role="Gameplay Programmer (Team of 7)" engine="Unreal Engine 5" platform="Windows" skills={["Blueprints", "Interdisciplinary Teamwork", "Game State Management"]}/>
      <ResponsivePlayer url="https://www.youtube.com/watch?v=U32NmC4CM8k"/>
      <ExternalLinkText href="https://ninjakgames.itch.io/goom" text="Itch.io Page"/>

      <p>
        Goom was made in the Spring of 2023 in the University of Utah's Traditional Game Development course (EAE 3710).
        This game is a Isometric slime game that drew inspiration from games like: Tunic, Death's Door, and The Legend of Zelda: The Wind Waker.
        There were 7 team members and 2 additional outside helpers.
        I worked on this game as the lead programmer for the gameplay aspects.
        In this game, things I implemented were: the projectile shooting mechanic, elemental interactions, player ability system, logic puzzle states, enemy combat, and blending between cinematics and gameplay.
        All of these were implemented using Blueprints due to the majority of the team being new to Unreal Engine at the time.
      </p>

      <h1>Elemental Slime Abilities</h1>
      <p>
        I was most proud of this system that I implemented with the help of my team.
        Designers thought of the initial idea and I helped bring them to life and made it functional.
        The system not only has combat capabilities but also can be used with puzzles.
        Designers on the project wanted each and every element to feel unique and powerful.
        Artists created amazing effects and visuals to help sell the power.
        I worked closely with all of them to implement their work into the game.
      </p>

      <p>
        I initially approached the elements by using an enumeration to list all possible elemental states the slime could be in.
        In the final game, we ended up with Fire, Water, Electric, and Slime, with Slime being the base/default state and the other elements would be acquired through exploration and puzzles.
        Once I had defined the Elemental enumeration, the real work would begin on the actual abilities and implementing those.
      </p>

      <h2>Slime Element</h2>      
      <VideoGallery items={slime_videos}/>
      <p>
        The designer came up with the idea for the Slime element wanted it to be easy and straightforward to use, as this would the first element the player encounters.
        They mentioned that when trying a new game players tend to hold buttons down or push every button to see what happens.
        The designer proposed to making this element shoot charged projectiles.
        I needed to figure out how I could accumulate the amount of time that has passed.
        I could use DeltaTime in order to add to a running total the amount of time that has passed and check if the running total had reached a charge threshold.
        Unreal Engine concepts of Timers and Timelines which help simplify this process.
        I used a Timeline where I set the time it takes until max charge and established a minimum duration that the button needed to be held before firing.
      </p>

      <p>
        Designers on my team wanted something else that the player could do in order to help sell the elemental mechanic.
        They proposed that each element should have a special ability/attack.
        This special ability would have a cooldown and be very powerful, synergizing with the element and primary attack.
        For the Slime element, the special would involve creating a clone that acts as a decoy, drawing enemy attention away from the player.
        My initial, naive approach was to spawn another character similar to the player.
        However, since it was a dummy it didn't need to move so making it inherit from the character class was unecessary so I had it inherit from the pawn class instead which was the minimum requirement to be recognized by the AI.
      </p>

      <h2>Water Element</h2>
      <VideoGallery items={water_videos}/>
      <p>
        This element went through many ideas, and we were constantly conflicted between water and ice.
        Both concepts offered interesting gameplay possibilities.
        We ultimately went with the liquid form as the the Slime element was providing physical interactions already.
      </p>

      <p>
        For the water primary attack projectile, a designer was obessed with bubbles/water droplets.
        They wanted the droplets to stick to enemies and slow them down.
        They designed the special to allow the player to detonate the water droplets and have them explode.
        I initially worked on was the detonation mechanic, as I felt this was simplier of the two.
        This mechanic required communication between actors.
        Unreal Engine has this concept of events and event dispatchers, which is another name for delegates and callbacks I learned about in my CS classes.
        I utilized this in my implementation where upon being spawned the droplets bind a callback to the character's special button delegate that then causes them to explode by sweeping the area around the droplet for enemies.
      </p>

      <p>
        Making the droplets stick to things proved to be complex at first.
        Studying the engine and its Entity-Component System design, it became clear to me that the entity being an actor has components that have their position updated based on the root.
        The droplet could be attached as a component to whatever it hit with its position being offset to stay in the same world position.
        By attaching it in this manner, its position and rotation would be updated if the source moved.
      </p>

      <h2>Fire Element</h2>
      <VideoGallery items={fire_videos}/>
      <p>
        Designers wanted the fire element to feel very powerful and slow, featuring big explosions and extensive area-of-effect damage.
        Once I had the water droplet explosion working, I reused the same code for the fire projectile.
        Instead of waiting for a callback for when to explode, I set it to explode upon collision.
        This was straightforward with the "Apply Radial Damage" blueprint node.
        Additionally, the designer wanted the special ability to funciton like a bomb with a fuse that leads to a massive explosion.
        I set up timer that starts when the projectile collides with something that would then trigger the explosion afterwards.
      </p>

      <h2>Electric Element</h2>
      <VideoGallery items={electric_videos}/>
      <p>
        The Electric element was designed to make the player feel fast and agile.
        The core design aimed to allow the player to zip and dash around enemies.
        The special ability would involve a dash mechanic, while the primary attack would be a rapid-fire projectile.
        To get shooting working initially, I had implemented the concept of fire rate, but now I needed to allow it to be adjusted per Element.
      </p>

      <p>
        Initially, I wasn't sure how to implement the dash mechanic.
        One idea was to teleport the player in the direction they were looking, but this posed some problems: What if they teleported into a wall?
        This approach didn't seem right. Another idea was to significantly increase the player's movement speed for a short period and then return it to normal.
        I preferred this idea because it allowed the player to control where they dashed, but it still had a problem.
        What if they were standing still? They would need to move in their forward direction.
      </p>

      <p>
        Up to this point the Character and Projectile Movement was all being handle for me through the Character Movement Component and Projectile Movement Component.
        I knew that physics must be calculated somewhere because the Player could move slowly and have a change in velocity.
        I investigated how to apply forces within Unreal Engine.
        You can apply forces to physics objects where you specify a vector that combines both direction and magnitude but applying a force only works on physics objects where the physics engine handles updating the position.
        I had to look on the Character Movement Component to see if there was a similar function to apply a force.
        The documentation revealed a method called "Launch Character", which has parameters similar as applying a force.
        I used this method to apply a dash force in the direction of the character's velocity if they were moving, and in the actor's forward vector when they were standing still.
      </p>

      <ImageGallery items={chain_lightning_images} showPlayButton={false} showIndex={true} showBullets={true}/>

      <p>
        After finishing the dash mechanic, I wanted to electrify the Electric projectile.
        A common mechanic I have seen in games was an electric chain attack, where multiple targets could be hit if they were close to each other.
        I wanted to incorporate this feature. Using what I had learned previously working on the abilities, especially for explosions, I learned about sweeping.
        I could sweep a sphere around the target hit to check for other targets.
        This would enable chaining from one enemy to the next, but there were still challenges.
        The chain would be random and might hit the same target multiple times or even through walls.
        To prevent hitting through walls, I needed to check for line of sight using a raycast from the original target to the next in the chain.
        If the next target was not visible, I would proceed to the next one.
        I also prevented a target from being chained more than once by maintaining a list of already chained targets and checking it when searching for a new target.
        This function is recursive and stops when either the chain limit is reached or when there are no more available targets to chain.
      </p>
    </PageLayout>
  )
}

export default Goom