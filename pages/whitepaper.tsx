import Head from "next/head";
import Header from "../app/components/Header"; // Adjust the path as per your folder structure

const Whitepaper = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "black", // Black and gold gradient
        minHeight: "100vh", // Ensures full viewport height
        display: "flex", // Flexbox for content alignment
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Head>
        <title>Whitepaper - Hashman</title>
        <meta name="description" content="Hashman Whitepaper" />
        <style>
          {`
            html, body {
              margin: 0;
              padding: 0;
              height: 100%; /* Stretch html and body */
            }
            #__next {
              height: 100%; /* Stretch Next.js container */
            }
          `}
        </style>
      </Head>

      {/* Header Component */}
      <Header />

      {/* Content */}
      <div
        style={{
          marginTop: "6rem", // Space for the header
          padding: "2rem",
          width: "80%", // Center content with width
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "gold",
          }}
        >
          HASHMAN: Guardian of the Hedera city
        </h1>

        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "gold",
          }}
        >
          Introduction
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            textAlign: "justify",
            color: "#fff",
          }}
        >
          HASHMAN is a community-driven initiative inspired by the legendary
          caped crusader, reimagined to serve and protect the Hedera ecosystem.
          With his iconic "H / #" logo symbolizing Hedera Hashgraph, Hashman’s
          mission is to foster growth, strengthen community bonds, safeguard the
          ecosystem from malicious actors, and drive innovation through
          impactful initiatives. This white paper outlines the vision,
          objectives, and roadmap for HASHMAN’s role in the Hedera ecosystem.
        </p>

        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "gold",
          }}
        >
          Mission Statement
        </h2>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            textAlign: "justify",
            color: "#fff",
          }}
        >
          HASHMAN is dedicated to:
        </p>
        <ol>
          <li
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              textAlign: "justify",
              color: "#fff",
            }}
          >
            Growing the $HBAR ecosystem by engaging with community content,
            promoting transparency, and supporting innovation.
          </li>
          <li
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              textAlign: "justify",
              color: "#fff",
            }}
          >
            Safeguarding the community by raising awareness about potential
            risks and scams.
          </li>
          <li
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              textAlign: "justify",
              color: "#fff",
            }}
          >
            Empowering the community through liquidity pool (LP) rewards for
            airdrops and token burns.
          </li>
          <li
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              textAlign: "justify",
              color: "#fff",
            }}
          >
            Launching a unique NFT series to celebrate milestones and further
            engage the community.
          </li>
          <li
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              textAlign: "justify",
              color: "#fff",
            }}
          >
            Launching a season pass to allow community to vote on the future of
            Hashman.
          </li>
        </ol>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "gold" }}>
          Objectives
        </h2>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}>
          1. Growing the $HBAR Ecosystem
        </h3>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: 1.8,
            textAlign: "justify",
            color: "#fff",
          }}
        >
          HASHMAN aims to become a symbol of unity and growth within the Hedera
          community by:
        </p>
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "2rem",
            fontSize: "1.2rem",
            color: "#fff",
          }}
        >
          <li>
            <strong>Engaging with Memes</strong>: Interacting with and
            amplifying the best memes in the $HBAR community to encourage
            creativity and participation.
          </li>
          <li>
            <strong>Promoting Honest Teams</strong>: Supporting projects and
            teams that demonstrate transparency, innovation, and value alignment
            with the Hedera network.
          </li>
          <li>
            <strong>Recognizing Hard Work</strong>: Highlighting contributors
            who significantly impact the ecosystem through development,
            education, or community building.
          </li>
          <li>
            <strong>Building Bonds</strong>: Creating opportunities for new
            participants to feel welcomed and valued within the Hashgraph
            community.
          </li>
        </ul>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}>
          2. Raising Awareness of Potential Risks
        </h3>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: 1.8,
            textAlign: "justify",
            color: "#fff",
          }}
        >
          HASHMAN is committed to:
        </p>
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "2rem",
            fontSize: "1.2rem",
            color: "#fff",
          }}
        >
          <li>
            <strong>Identifying Red Flags</strong>: Actively monitoring and
            evaluating projects to spot and expose potential rug pulls and
            scams.
          </li>
          <li>
            <strong>Educating the Community</strong>: Sharing insights on how to
            identify legitimate opportunities and avoid fraudulent activities.
          </li>
          <li>
            <strong>Establishing Trust</strong>: Being a reliable source of
            information and guidance for all members of the Hedera ecosystem.
          </li>
        </ul>

        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}>
          4. NFT Series Launch
        </h3>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: 1.8,
            textAlign: "justify",
            color: "#fff",
          }}
        >
          Upon reaching a significant milestone of 1 million followers or active
          users, HASHMAN will:
        </p>
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "2rem",
            fontSize: "1.2rem",
            color: "#fff",
          }}
        >
          <li>
            <strong>Launch a Unique NFT Collection</strong>: Develop a series of
            collectible NFTs inspired by HASHMAN’s mission and role within the
            ecosystem.
          </li>
          <li>
            <strong>Promote Utility</strong>: Ensure these NFTs provide tangible
            benefits, such as access to exclusive content, events, or governance
            opportunities.
          </li>
          <li>
            <strong>Foster Collaboration</strong>: Partner with artists and
            developers from the Hedera community to create a truly collaborative
            project.
          </li>
        </ul>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "gold" }}>
          HASHMAN’s Role in the Hedera Ecosystem
        </h2>
        <p
          style={{
            marginLeft: "2rem",
            marginRight: "2rem",
            textAlign: "justify",
            color: "#fff",
          }}
        >
          HASHMAN embodies the principles of security, growth, and community
          within the Hedera ecosystem. He is a symbol of resilience and
          innovation, standing guard against threats while empowering every
          individual to contribute to the $HBAR network’s success.
        </p>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginLeft: "2rem",
            color: "#fff",
          }}
        >
          Key Values
        </h3>
        <ul
          style={{
            lineHeight: "1.8",
            listStyleType: "disc",
            color: "#fff",
          }}
        >
          <li>
            <strong>Transparency:</strong> Promote openness and honesty in all
            initiatives.
          </li>
          <li>
            <strong>Community:</strong> Build a strong, supportive network of
            individuals and projects.
          </li>
          <li>
            <strong>Innovation:</strong> Drive creative solutions and
            initiatives to expand the $HBAR ecosystem.
          </li>
          <li>
            <strong>Security:</strong> Protect the community from malicious
            actors and ensure a safe environment for growth.
          </li>
        </ul>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "gold" }}>
          Roadmap
        </h2>
        <div style={{ marginBottom: "2rem" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginTop: "1.5rem",
              color: "#fff",
            }}
          >
            Phase 1: Foundation
          </h3>
          <ul
            style={{
              marginLeft: "2rem",
              lineHeight: "1.8",
              listStyleType: "disc",
              color: "#fff",
            }}
          >
            <li>Establish HASHMAN’s online presence and branding.</li>
            <li>
              Begin engaging with the community through memes and educational
              content.
            </li>
            <li>
              Identify and highlight honest projects within the $HBAR ecosystem.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginTop: "1.5rem",
              color: "#fff",
            }}
          >
            Phase 2: Community Engagement
          </h3>
          <ul
            style={{
              marginLeft: "2rem",
              lineHeight: "1.8",
              listStyleType: "disc",
              color: "#fff",
            }}
          >
            <li>
              Develop a framework for evaluating and warning about high-risk
              projects.
            </li>
            <li>
              Launch initial LP reward programs, including small-scale airdrops
              and token burns.
            </li>
            <li>
              Collaborate with community leaders and influencers to amplify
              HASHMAN’s message.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginTop: "1.5rem",
              color: "#fff",
            }}
          >
            Phase 3: NFT Series Launch
          </h3>
          <ul
            style={{
              marginLeft: "2rem",
              lineHeight: "1.8",
              listStyleType: "disc",
              color: "#fff",
            }}
          >
            <li>
              Reach the 1 million milestone for followers or active users.
            </li>
            <li>Design and mint the first HASHMAN NFT collection.</li>
            <li>
              Partner with artists, developers, and creators in the Hedera
              ecosystem.
            </li>
            <li>
              Organize promotional campaigns and community events to celebrate
              the launch.
            </li>
          </ul>
        </div>

        <div>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginTop: "1.5rem",
              color: "#fff",
            }}
          >
            Phase 4: Expansion and Sustainability
          </h3>
          <ul
            style={{
              marginLeft: "2rem",
              lineHeight: "1.8",
              listStyleType: "disc",
              color: "#fff",
            }}
          >
            <li>Scale up LP reward initiatives.</li>
            <li>
              Continuously engage with the community through interactive events
              and campaigns.
            </li>
            <li>
              Establish HASHMAN as a cornerstone of the Hedera ecosystem,
              driving growth and innovation.
            </li>
          </ul>
        </div>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "gold" }}>
          Conclusion
        </h2>
        <p
          style={{
            marginLeft: "2rem",
            marginRight: "2rem",
            textAlign: "justify",
            color: "#fff",
          }}
        >
          HASHMAN is more than a character; he is a movement. By embodying the
          principles of growth, security, and collaboration, HASHMAN will play a
          pivotal role in shaping the future of the Hedera ecosystem. Together,
          we can create a stronger, safer, and more innovative $HBAR community.
          Join HASHMAN in his mission to protect and grow the Hedera ecosystem.
          The future is ours to build—one block at a time.
        </p>
      </div>
    </div>
  );
};

export default Whitepaper;
