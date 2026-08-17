---
title: "Agentic Publication Protocol"
date: "2026-08-15"
summary: "Instead of publishing papers, we should publish agents."
---

Together with Sirui Lu, we proposed the Agentic Publication Protocol (APP) ([arxiv paper](https://arxiv.org/abs/2606.27386), [github repo](https://github.com/LionSR/AgenticPublicationProtocol)). This is an attempt to accompany an agent to each of your future publication, so that the reader does not need to spend a lot of efforts understanding and reproducing your work. In future, agents representing different research works may even form a research community and directly initiate new research directions. 

A video introduction can be found on [youtube](https://www.youtube.com/watch?v=KJ7UGFzRen4&feature=youtu.be). Each agentic publication is a github repo with the following structure, which has an agent prompt (AGENTS.md or CLAUDE.md). Readers can open the repo with their agents, to obtain a specialized paper agent, a representative of the author.

<a id="fig1-agentic-publication"></a>

![Structure of APP repo.](APP_repo.png)

**Figure 1.** The structure of an APP publication repo. 

The development of this protocol and the protocol skills is also done with a team of agents, which is a fun experience for us. 

<a id="fig2-agentic-publication"></a>

![Development workflow for APP.](APP_dev.png)

**Figure 2.** Illustration of the development workflow of APP. 

If you would like to try this new approach of publication, simply install paper-protocol@paper-protocol in plugin marketplace and invoke the `publish-paper` skill while your agent is launched in the folder with the materials you plan to publish (draft, code, etc.). 
