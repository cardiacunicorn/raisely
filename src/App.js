import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Page-header">
        <h1 className="Page-title">Campaign dev application</h1>
      </header>
      <body className="Page-body">
        <div className="QandA">
          <h2 className="Question">Why would you be a good fit for the <strong>Campaign Developer</strong> role?</h2>
          <div className="Response">
            <p>
              In addition to being a web developer, I've also been a fundraiser and a campaigner, at <a class="App-link" href="https://www.getup.org.au/">GetUp! Australia</a> and the <a class="App-link" href="https://greens.org.au/">Australian Greens</a> &ndash; this gives me a valuable perspective on your platform, and helps me understand the context your clients are working within.
            </p>
            <p>
              During my time at the Greens, it quickly became apparent their own fundraising pages and forms were dated and underperforming significantly, so I built the case for change and advocated for Raisely as an alternative.
            </p>
            <p>
              This advocacy eventually led me to running a few trial campaigns through Raisely (Julian Burnside & Larapinta) to demonstrate improved functionality and performance gains. This experience as a client of Raisely's gives me an invaluable perspective on your platform, and a useful anecdote to discuss with your other clients.
            </p>
          </div>
        </div>
        <div className="QandA">
          <h2 className="Question">Why do you want to work <strong>here</strong> over somewhere else?</h2>
          <div className="Response">
            <p>
              I was introduced to Agency while I shared a Sydney office with them during my time at GetUp a number of years ago. I never got the chance to really get to know the folks while I was there, but the vibe, ethics and high-quality of people you could find in 'the Campaignery' back then was peerless. Just from that experience, and the mutual friends I share with Murray & Tom, I'm confident that the team behind Raisely is a fantastic, talented and passionate crew.
            </p>
            <p>
              I've always been impressed by some of the creative works Agency produced over the years, they've always been the standard of excellence to beat when it came to web presence, so when I saw they were behind Raisely at a time when confidence in the Greens' fundraising platform was quite low, I made sure that when advocating for system change that Raisely was considered for a trial (this also extended to Kepla, which looked leagues ahead of our own ancient CRM).
            </p>
            <p>
              Raisely handily proved that it could improve upon our platform in every perceptable way, with the trials we ran not only meeting more advanced functionality requirements, but smashing people's expectations for how much we could raise from our supporters. I sincerely believe it's a powerful and high-performing beast of a platform, and it's been a pleasure to use &ndash; I only wish in those experiences that I had more time to play with things under the hood. So when I spotted this opportunity, intuiting how much I'd gel with the team, I had to throw my hat in the ring.
            </p>
          </div>
        </div>
        <div className="QandA">
          <h2 className="Question">Which two tasks are you <strong>excited by?</strong></h2>
          <div className="Response">
              <div class="container">
              <div class="number">1</div>
              <div class="heading"><h3>Looking at data (SQL or spreadsheets) to figure out the A/B test to set up in Google Optimize</h3></div>
              </div>
              <p>
                I feel like this is an area I've got the most experience in. GetUp introduced me to SQL now six years ago, and ever since I've been using it to generate reports, create live dashboards, and investigate perceived oddities in databases. I feel like I never run short of ideas for tests to run, and for the Greens I set up a number of A/B and multivariate tests to optimise their website in numerous ways over the last few years, from the simple to quite complex. It always struck me how much extra performance could be gained by running these tests, and my colleagues regularly told me how great some of my reportbacks were.
              </p>
              <div class="container">
                <div class="number">2</div><div class="heading"><h3>Integrating Raisely to Salesforce, via Zapier</h3></div>
              </div>
              <p>
                I love using Zapier, and have a bunch of experience with it across dozens of platforms. There's something deeply satisfying that comes from connecting platforms, solving logic puzzles and automating processes. Salesforce specifically feels like it'd be a breeze and a pleasure to work with after some of the heavily customised CRMs I used while at GetUp and the Greens &ndash; or at the least it'll have better documentation!
              </p>
          </div>
          <h2 className="Question">Which two tasks do you <strong>want to learn?</strong></h2>
          <div className="Response">
            <div class="container">
              <div class="number">1</div><div class="heading"><h3>Building a special kind of campaign leaderboard as a component in React</h3></div>
            </div>
            <p>
              I'm quite new to React, so thought I'd spin up a site using it to complete this task. It's been on my 'To Learn' list for a while, and I can see it'll be something I learn to love fairly quickly. Custom components are always fun too, not too sure how it all works together just yet, but genuinely looking forward to having a play around and seeing what I can put together.
            </p>
            <div class="container">
              <div class="number">2</div><div class="heading"><h3>Building a custom theme on Raisely, with your own SASS styles and javascript components</h3></div>
            </div>
            <p>
              Time constraints didn't allow for too much customisation during the trial Raisely fundraisers I ran while at the Greens, but from what I saw of the customisation available just from the client side, it looks seriously powerful and seems like it'd be a lot of fun to build out some themes and components.
            </p>
          </div>
          <h2 className="Question">Which two tasks <strong>don't you want to do?</strong></h2>
          <div className="Response">
            <div class="container">
              <div class="number">1</div><div class="heading"><h3>Creating a complex, multi-step signup form using Create React App, Stripe payments and our API</h3></div>
            </div>
            <p>
              Great, cheeky question! Caveat would obviously be that I would of course do the work if that's what needed to be done, but you asked so...</p>
              <p>From the tests I ran last year, I'm thoroughly impressed with the donation conversion rates for your forms, and having seen the real-world fundraising difference between your platform and the terribly styled, poorly optimised CiviCRM donation form the Greens were using, I'd be a bit anxious to meddle with something that seems to already be doing so well.
            </p>
            <div class="container">
              <div class="number">2</div><div class="heading"><h3>Running a scoping call with a customer to figure out all the details about their campaign</h3></div>
            </div>
            <p>
              I've recently been doing a few freelance web dev contracts, and while I'm confident I'm asking the right questions, encouraging them to innovate, and all the rest that comes with consulting, there's still something deeply daunting about providing quotes and estimates - particularly regarding how long a component may take to build.
            </p>
            <p>I think it's something that will get easier the more I do it, balancing with wanting to do good by the client, while representing your own interests and getting paid fairly, but would be keen to have a guiding hand or at least get some advice and tips from people on your team.
            </p>
          </div>
        </div>
        <div className="QandA">
          <h2 className="Question">Tell us about a platform you believe has <strong>solved a complex problem</strong> really well, and why. <strong>Would you change anything</strong> in their approach?</h2>
          <div className="Response">
            <p>Tough question! Just because it's fresh on the mind from one of the above questions, I'd have to say Zapier. They've done a fantastic job making connecting APIs as close to zero hassle as possible, but with that said it's equally difficult to fault their approach without properly seeing what's gone in to each of their decisions. If I had to nitpick, I'd love their platform to open up a little more: trial periods for some of their premium features, and more access to hack around limitations you might find in each of their platform connections for folks who feel confident to meddle in these things.
            </p>
            <p>Another good example might be Google's Data Studio, with their stealing the thunder from Tableau and other data visualisation platforms. It's fantastic in a similar way to Zapier, allowing databases from multiple platforms to just work together in a pain-free way. However, it could do with more expansive onboarding and tutorials for beginner users, and in my anecdotal experiences often ship features without the testing or functionality you've grown to expect from Google or a competitor like Tableau.
            </p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
