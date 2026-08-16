---
title: "What Is Life? -- Question Revisited in the AI Era"
date: "2026-08-16"
summary: "Coauthored with Kai Wu. Revisiting Schroedinger's question in the AI era, with a focus on stable internal state as a boundary between LLM systems and life."
---

# What Is Life? -- Question Revisited in the AI Era

Xiao-Liang Qi and Kai Wu

August 16, 2026

**Abstract.** Will today's large language models (LLMs) evolve into a form of intelligent life? This question is of course significant for both the AI enthusiast and the AI skeptic. An AI civilization could be viewed as a child of our human civilization that we love, or a threat that we fear--or, likely, both. Therefore it is timely to go back to Erwin Schrödinger's famous question: "What is life?" [1](#ref-schrodinger1944what) and ask it again in the context of the AI revolution. In this article, we review some key features of biological life and discuss the comparison of LLMs with life. We conclude that a stable and self-maintained internal state is the key difference between LLM systems and life. We discuss a possible approach toward a "living" AI system: to create an AI population with well-defined individuals in an open environment.

## Empirical Facts About Life

We begin by reviewing some empirical observations about life. These statements may not be universally accepted, but they are likely close to common-sense views about the features of life.

1.  Life is a complex open system.

2.  Life can adapt to its environment. Within some range, it can respond
    to different environmental situations in ways that maintain the
    survival of the individual or the population.

3.  As Schrödinger pointed out, for life to persist, it must draw energy from the environment, reduce its own entropy, and resist the tendency described by the second law of thermodynamics [1](#ref-schrodinger1944what).

4.  Life usually has relatively well-defined individuals. A population
    typically contains many individuals that are similar to one another
    but not identical. The boundaries between individuals are usually
    clear, and therefore death is well defined for an individual: there is
    a point at which the system fails and can no longer continue, without
    this failure directly destroying other individuals. There are
    exceptions. For a plant, a branch of a tree may continue to live
    independently, so it can be ambiguous whether the branch should be
    regarded as part of the original individual. For eusocial animals such
    as ants, it is also ambiguous whether the colony or the single ant is
    the relevant individual. A worker ant has no reproductive capacity and
    serves the goal of the colony. If the colony is regarded as one life
    form, it also has a relatively clear boundary, since it is usually
    well defined which ants belong to which colony, and it may exhibit
    behavior analogous to reproduction. It is possible that life exists at
    multiple levels, such as cells and humans, or individual ants and ant
    colonies. Each life form also has a different scope. A red blood cell,
    for example, can only survive in the internal environment of the body.

5.  Individual organisms can reproduce, which enables species to survive and evolve over long time scales.

6.  Compared with the variability and complexity of its external form,
    life has a relatively stable code, such as DNA and the central dogma,
    which controls its form and changes at an appropriate rate through
    mutation and evolution. Through this mechanism, life balances two
    requirements: adapting rapidly enough to new situations, and remaining
    stable enough not to overfit the present environment and lose the
    capacity to respond to future changes.

These observations lead to several questions that we discuss in the next section.

## Questions about Life and Intelligence

### What Is the Essential Difference Between Life and Non-Life?

From the standpoint of physics and chemistry, the motion of living
organisms obeys the same laws as other physical and chemical processes
on Earth. Life is certainly a form of order, but what distinguishes this
order from other forms of order, such as the order of a crystal? Two
differences are immediately visible.

First, life has long-term path dependence. The formation of a crystal
depends mainly on present environmental parameters, such as chemical
composition, temperature, and pressure. Life, by contrast, is the result
of gradual evolution over billions of years. If all life were removed
while the present natural environment were otherwise held fixed, it
would probably take a very long evolutionary process for life of
comparable complexity to reappear. This path dependence also means that
the form of life contains a large degree of contingency and is not fully
determined by the environment. At the level of an individual organism,
this path dependence appears as highly tuned initial conditions, such as
the fertilized egg of a mammal and the maternal environment on which
embryonic development depends. These conditions are very different from
those that would normally arise spontaneously in the external natural
environment.

Second, life adapts to its environment. Compared with non-living matter,
living order responds to environmental change in a more active and
complex way.

Roughly speaking, both features can be summarized by saying that life is
a more “low-entropy” form of order than non-life. The entire evolutionary history of
life represents a very low-probability path among all possible histories
of the relevant atoms and molecules. Among all possible histories of
Earth, the probability that the same crystal appears is much higher than
the probability that the same life form, or even a different life form
of comparable complexity, appears.

<a id="fig-circuit"></a>

![A model for the interaction between life and environment.](fig1.png)

**Figure 1.** A model for the interaction between life and environment. $p_n$ represents the internal state of the living system, while $Z_n$ is the internal state of the environment. $x_n$ is the input from the environment to the living system, and $y_n$ is the response from the living system to the environment.

However, low probability may not be the most essential feature. A
Boltzmann brain is also low probability, but it lacks temporal
complexity. It may be better to say that complexity is the essential
feature of life. We can describe the interaction between life and environment by the model illustrated in [Figure 1](#fig-circuit). The environment has a state $Z_n$ and the living system has its own internal state $p_n$. During each round of interaction, the environment gives the living system an input $x_n$, and the living organism gives a response $y_n$, while updating its own state. The environment takes this output $y_n$ and responds in turn. In equations:
$$
\begin{aligned}
  (y_n,p_{n+1}) &= F_L(x_n,p_n)\\
  (x_{n+1},Z_{n+1}) &= F_E(y_n,Z_n)
\end{aligned}
$$
Here we use $F_L$ and $F_E$ to denote the actions of the living organism and the environment. The difference between life and other objects is the complexity of the map $F_L$. The behavior of $F_L$ needs to be complex in terms of the input-output relation $x_n\rightarrow y_n$, and it also has a complex dependence on the environment. For example, a farmer needs to make decisions based on both long-term factors (precise knowledge about the soil, weather patterns, and crop cycles) and short-term factors (current weather conditions). Such environmental factors are considered by the farmer via the internal state $p_n$, which in this case is the farmer’s knowledge in her memory. The complexity of $F_L$ also means that after many iterations, the activity of life remains complex, rather than converging to a simple attractor. In contrast, one can imagine a situation where a single function is complex, but after many iterations the system always converges to an uninteresting fixed point. In that case, the system is no longer alive.

The model illustrated in [Figure 1](#fig-circuit) is of course a simplification of the real situation. For example, it does not reflect the interaction between different individuals or between different species. However, we hope it captures the essential structure of life-environment interaction. In particular, the internal state $p_n$ is essential for our discussion later.

### How Should We Compare Different Levels of Life or Intelligence?

We often regard a dog as more advanced than an ant, and a human as more
advanced than a dog. Yet a more advanced organism may exist for a much
shorter period in natural history than a simpler organism. Being more
advanced does not necessarily mean being more robustly adapted to the
environment. Is there a clear criterion for comparing levels of life?
This question becomes especially important when we consider humans and
possible future forms of silicon-based life.

One possible criterion is the amount of energy that a life form can use.
Humans can harness more energy for their purposes than other organisms.
But this does not seem fundamental. Suppose there were a life form on
the scale of a galaxy, with stars playing a role analogous to cells. Its
energy scale would clearly be larger, but this would not imply that its
intelligence is higher than that of humans, or even of other organisms
on Earth. Conversely, we may develop energy-efficient technologies that
allow silicon-based life to realize the same level of intelligence using
much less energy than humans do.

A more universal measure of intelligence may be the degree to which an
organism understands the regularities of the world. Humans can predict
the weather and calculate the trajectory of a rocket accurately enough
to send people into space. Other organisms do not have this kind of
predictive capacity. In order to survive, every life form develops some
model of the world that guides its behavior. This model need not be
explicitly represented. For example, a bird may navigate using the
Earth’s magnetic field without knowing that it has such a capacity. If
the model determines behavior, then in this operational sense the model
exists.

Given a world model, the predictive ability of a life form can be
described by a Kullback-Leibler (KL) divergence between the predicted
distribution $q(x_n|H)$ and the true distribution $p(x_n|H)$:
$$
L = \sum_i p(x_n|H) \log\frac{p(x_n|H)}{q(x_n|H)}
$$
Here $H$ represents the entire history $\{x_1,y_1,x_2,y_2,\cdots,x_{n-1},y_{n-1}\}$ of the interaction between the life and the environment. This quantity measures how unsuccessful the prediction is. Lower KL divergence means better prediction. A maximally
intelligent system would experience no surprise: all events would
already be predicted by its world model. The more situations remain
unpredictable to an individual life form, the lower its intelligence in
this sense. A related discussion about this point can be found in Section 12 of Liu et al. [2](#ref-liu2025foundationagents).

### The Order-Parameter Set

As we discussed in the previous subsection, we can view an individual life as a complex machine that interacts with the environment. In order to behave intelligently, this complex machine must have a complex internal state, which is $p_n$ in [Figure 1](#fig-circuit). The more intelligent the life is, the more complex this internal state is (as is the mechanism that enables the complex action controlled by this internal state). This is essential for characterizing correlations in the environment during longer time scales. For example, a bird needs to maintain different levels of internal state: the short-term memory about what it observed minutes ago; the muscle memory about how to fly; the genes that guarantee new cells are produced in the right way; and the immune system that remembers information about potential threats from the outside world. The capability of preserving the internal state is essential for intelligent life, because a machine with a simple internal state can only react in a simple way to the exterior world. In computer-science terms, one can view the protection of internal state as an error correction mechanism. Neural cells are evolving all the time, but memory is maintained relatively well in a well-functioning brain. DNA is reproduced in each cell division, with a repair mechanism that avoids significant error. As we know, failure of the error correction mechanism in protecting the DNA causes cancer.

In addition, the stable internal state is also essential for evolution. Different parts of the internal state are preserved on different time scales. For humans, short-term memory lasts for tens of seconds, and long-term memory can last for tens of years, while DNA remains the same across one’s lifetime. DNA is the “control parameter” that describes an individual life, which mutates during reproduction and gets selected by natural selection. In order for natural selection to “work,” which means enabling the emergence of more and more intelligent life, it is essential that the control parameter be “global” for an individual life: if there is no such parameter that remains stable across its life span–if life is a Brownian machine that changes randomly all the time–then natural selection can only prefer individuals that have certain instantaneous properties. One can also make an analogy and say the same thing for the role of language and collective memory in human civilization. These are “global states” that can remain stable for a long time, even longer than an individual’s lifetime. Information carried by stories, first orally and then in written form, plays a role similar to that of genes in biological life. Then there is also a selection process similar to natural selection. Some ideas and stories are remembered more by society and remain “alive” for a long time, while many others become extinct. In this sense, the emergence of human language—language that can carry information almost universally, rather than being restricted to certain practical purposes like animal sounds—marks a new era in Earth history. It marks the emergence of a new form of stable internal parameters that can be created, reproduced and mutated, which started a new form of evolution.

For different forms of life, the essential internal state is different. For example, for a single-cell organism, the essential internal state is the DNA sequence. For an individual human, it includes both genetic information and memory in the brain. For human civilization, it also needs to include language and collective memory (knowledge, law, religion, etc.). We would like to name such internal states the **order-parameter set** of a life form. This name is borrowed from condensed matter physics, where an order parameter is the physical quantity that characterizes a phase of matter, such as magnetization for a ferromagnet, or lattice vectors for a crystal. For life, it is essential that the order parameters be, on the one hand, robust against external perturbations, and on the other hand, able to evolve and adapt to the environment.

This insight is essential for the discussion in the remainder of the article, so we would like to summarize it as the following:

> **Insight 1**. The capability of maintaining a complex order-parameter set over a variable range of time scales is necessary for intelligent life.

We would like to elaborate on why the order-parameter set should have a variable range of time scales. For example, for human beings, we need the DNA to remain stable across one’s lifetime, but memory needs to have the ability to change. This change has to occur on variable time scales in order to accomplish different tasks. Short-term memory is needed for instant and short-time reaction, while long-term memory is needed for long-term planning and for accumulating knowledge and experience. Even if there is a totally different form of life, such a capability of adapting to the environment on variable time scales will still be essential, since this is determined by the complexity of the environment. By comparison, if we consider a simple game environment where events have no long-time correlations, an agent with only short-term memory may be sufficient to adapt to the environment. A high level of intelligence can only be defined in a complex world with complex long-time correlations.

In the next section, we will apply this insight to the comparison between language model AI and life.

## AI and New Form of Life

### Is AGI an Intelligent Life Form?

Suppose we build a powerful artificial general intelligence (AGI) whose predictions are better than human predictions for any question we give it. Would such a system be a higher form of intelligent life?

If the AGI exists in the same form as today’s LLMs, namely as a program
running on GPUs that we can query, the answer should be no. Such a
system may have strong capabilities, but it is humans who decide when those capabilities are
invoked, what context is provided, whether the system continues running,
and whether its memory is preserved or erased. This is the key difference that disqualifies today’s AI as a form of life. It is an *instance*–a spacetime
snapshot of a potential higher intelligence. In some sense this reminds us of the discussion about "Boltzmann brain" in theoretical physics.[^1]

The main reason why such an instance is different from life is that it lacks the capability of maintaining a stable internal state–i.e. the order-parameter set. AI models today have a stable set of parameters–their weights–but they are simply static until the model is externally updated. The other kind of internal state is the context sent to an LLM, which plays a role similar to human long-term and short-term memory. However, the context is also managed externally in a way that is separate from the core model itself. As long as the model weights and the context remain entirely under human control, the AI model cannot be viewed as intelligent life. If a system depends entirely on external decisions for its continued existence, and if it has no knowledge of those external factors, it is hard to regard it as alive.

Consider two AI agents built with the same LLM. If humans can copy the context of agent 1 into agent 2, then agent 2 can immediately become agent 1 in all operationally relevant senses. In that case, it is no longer meaningful to treat agent 2 as a distinct individual. Instead we have to view each round of interaction with such an agent as an independent event in spacetime. Today’s AI systems resemble collections of such events. These events can be linked together artificially to provide temporal continuity, which is what happens in a chat session, but this continuity has no guarantee and can be broken at any time.

This problem–the absence of a system that maintains the internal state and makes sure it is stable and immune from external attacks–also means we cannot define a set of parameters that control the behavior of the AI agent across a long time scale. As we discussed in the previous section, only if such stable order parameters are defined can the life system live in an open environment, reproduce and evolve under natural selection.

In conclusion, by comparison with biological life, we see that the presence of “silicon-based life” is not determined by the capability level of the models, but by *the degree of autonomy*. A continuously running agent such as OpenClaw [5](#ref-openclaw) or Hermes [6](#ref-hermesAgent) may be one step closer to life (in an online environment), but it still does not cross the threshold if its context can be changed by humans at any time. It also lacks a long-term process of hereditary variation. We can summarize this as the following insight:

> **Insight 2**. An AI system may qualify as a life form only if it satisfies the following criteria:
>
> 1.  It interacts with an open environment.
>
> 2.  It maintains its own set of order parameters, including its model weights, memory management mechanism and contents, and has an error correction mechanism to protect them against potential attacks.
>
> 3.  There is a mechanism to modify its order parameters, similar to the reproduction procedure of biological life, which allows the order parameters to evolve and adapt to the environment.

### Are Individuals Essential?

In the discussion so far, we have emphasized the importance of maintaining a stable order-parameter set for intelligent life. A remaining question is whether maintaining the order-parameter set requires the definition of an *individual*, which is a modular unit of life that has a clear boundary in both space and time, carries the essential stable information, the DNA sequence, and exists in large numbers to form a population. Alternatively, one can also imagine a situation where the entire species is a single organism, and the order-parameter set evolves gradually, without the clear birth and death of an individual unit. Could the AI become a new advanced civilization that is capable of handling the world in ways we cannot, such as realizing superluminal travel, while still having no concept of individuality? Could its self be fluid, arbitrarily modifiable and expandable?

Because we have no experience with intelligent life forms other than
humans, we cannot determine whether such a trans-individual life form is
possible. A more modest question is whether clear individual boundaries
are useful for the evolution of high intelligence.

An analogy with model training is helpful. The DNA of life corresponds
to model parameters, while the experiences of one lifetime correspond to
a data point in the training set. If a species contains many individuals
whose DNA varies through heredity and mutation, the possible
environments encountered by all individuals across their lives form a
dataset. Natural selection is analogous to a Monte Carlo algorithm that
gradually selects parameter regions better adapted to the environment.

If individuals have no clear boundary in space and time, then life faces
only one unique world environment. There is no repeatability, and it
becomes unclear over what time scale adaptation to the environment is
being optimized. The opposite extreme is the instance, as in current AI
models. Each invocation is in principle independent, because the
relation between contexts can be artificially modified or interrupted.
The history of model use is therefore fragmented. If model optimization
is based on such a fragmented history, it can only optimize performance
over a small number of dialogue turns. Although humans can
prepare training data that include long conversation histories and train specifically for long-dialogue tasks, it would be difficult to manually increase the task length to a length analogous to a human lifetime. Instead, only in an open environment with a natural selection mechanism can such evaluation occur on arbitrarily long time scales.

Thus, from the perspective of evolving higher intelligence, a population
made of many individuals with clear spacetime boundaries is at least a
working model, and it is the only model we know. The lifetime of
individuals and the mechanism of reproduction are important tunable
meta-parameters in this evolutionary algorithm, which affect the time scale at which the evolutionary algorithm adapts to the environment. Roughly speaking, species with longer lifespans get more opportunities to explore aspects of the environment at longer time scales and develop more complex strategies, while species with shorter lifespans and faster reproduction rates can adapt to changes in the environment more rapidly.

One could also view the entire species as a program whose purpose is to adapt to the environment and continue the population. The individuals are then modular units in that program. A complex program naturally requires such modular units, rather than an unstructured mixture of all functions. There could be multiple layers of such individual units, just as cells compose humans and humans compose social organizations.

In summary, we reach the third conclusion that we would like to emphasize:

> **Insight 3**. As a possible working model of AI intelligence evolution, one may follow the example of biological life and define AI “individuals” as modular units that carry stable internal state and have their own birth, death, and reproduction mechanisms. Natural selection in a large population of such individuals in an open environment may provide a route toward a new form of intelligent life.

## Conclusion and Discussions

In summary, we have discussed various common features of life, and the similarities and differences between biological life and artificial intelligence. Life is a complex open system that can stay away from equilibrium for an extended period of time, and respond to environmental changes in complex ways. To realize such a complex system, it is essential to maintain a stable order-parameter set that changes in a controlled way. The key difference between today’s AI and life is the absence of an intrinsic mechanism for managing and maintaining its internal state. AI can only develop into a new form of life if it manages its own order parameters, including its contents and weights, and if such order parameters can evolve and be selected by an open environment.

<a id="fig-agent"></a>

![A sketch of a prototype AI agent with a clear boundary as an individual.](fig2.png)

**Figure 2.** A sketch of a prototype AI agent with a clear boundary as an individual. The input router determines the context provided to the LLM, while the output router determines which parts of the output are sent to the external environment and which remain private. The private history plays the role of long-term memory and is generally exposed to the external environment only partially.

A common pattern for life is hierarchical organization, with well-defined individuals as modular units. The individual provides the basic building block that carries genetic information and is subject to natural selection. It is possible that LLM AI could evolve into future intelligent life following the same approach, but it is also possible that it will explore a totally different path. If AI follows the same approach, then this requires AI systems with clearly defined individual units, which maintain and protect their own private context and carry unique “genes” that can be reproduced and mutated. Compared with today’s AI agents, such an AI individual needs to have an immutable memory and intrinsic lifespan. To illustrate this idea, we draw a preliminary sketch of such an AI agent in [Figure 2](#fig-agent). The agent has a private memory and can decide to expose only part of that to the environment. The LLM parameters, memory management mechanism (determined by the input and output routers), and private memory are the order parameters of the agent. The order parameters should be protected against external attacks, through encryption or other mechanisms. The agent can interact with the environment and reproduce. During reproduction, the order parameters mutate following some preset rules. There needs to be a rule in the environment that determines the survival of an individual agent, which leads to the evolution of the population.

From the model training point of view, our opinion can be rephrased as the statement that an evolutionary algorithm in a large open environment is more useful than algorithms that train a single model in a controlled small environment (which includes pretraining, supervised fine-tuning, reinforcement learning, etc.). This is particularly important considering the facts that LLM capability is rapidly improving, and the available computational resources for constructing a large open environment are getting more abundant. As more and more real-life tasks are achieved by agents, it becomes more natural to have a large ecosystem with evolving agents, instead of out-of-the-box static agents separately trained in small closed environments.

Our discussion is closely connected to the current trend of recursive self-improvement (RSI), for both foundation model weights and agent harnesses, as recently reviewed by Weng [7](#ref-weng2026harness). Similar to Insight 3, natural selection and evolutionary approaches are increasingly being explored as mechanisms for RSI. For example, AlphaEvolve [8](#ref-novikov2025alphaevolve) optimizes a population of candidate programs through repeated variation and selection, while Darwin Gödel Machine [9](#ref-zhang2025darwingodelmachine) goes further by allowing agents to modify their own harnesses and generate new variants.

However, we would like to emphasize that the evolution of a large ecosystem of agents is not merely a way to train a more powerful AI agent. Instead, evolution selects an *ensemble* of AI individuals, rather than a single model. This may lead to the diversity that we know is essential for a biological species to flourish. This may also be of practical importance for human purposes. For example, if we want AI to make new discoveries in science and technology, it is important to have a diversity of ideas similar to that of human researchers. Breakthroughs are often driven by researchers who happen to have the right idea. Maintaining such diversity of ideas is essential for the creativity of the research community. This is one key aspect that is missing in today’s AI systems[^2]. An ecosystem of “living” AI agents may lead to persistent diversity in knowledge, strategies, and even purposes.

As a disclaimer, this discussion should not be interpreted as an effort to build silicon-based life. One could interpret it in two ways. Understanding the similarities and differences between AI and biological life could enable us to design silicon-based life, or help us to avoid creating it. For either purpose, the control and management of an immutable internal state is the key factor.

[^1]: For background on the Boltzmann brain thought experiment, see [3](#ref-boltzmannbrainWikipedia); for the Feynman-related discussion, see [4](#ref-carroll2008boltzmann).

[^2]: See also [10](#ref-qi2026agentification), written by one of us.

## References

<a id="ref-schrodinger1944what"></a>
[1] Erwin Schrödinger. *What Is Life? The Physical Aspect of the Living Cell*. Cambridge University Press, Cambridge, 1944.

<a id="ref-liu2025foundationagents"></a>
[2] Bang Liu et al. "Advances and Challenges in Foundation Agents: From Brain-Inspired Intelligence to Evolutionary, Collaborative, and Safe Systems," 2025. [arXiv:2504.01990](https://arxiv.org/abs/2504.01990).

<a id="ref-boltzmannbrainWikipedia"></a>
[3] Wikipedia contributors. "Boltzmann Brain." [https://en.wikipedia.org/wiki/Boltzmann_brain](https://en.wikipedia.org/wiki/Boltzmann_brain). Accessed August 16, 2026.

<a id="ref-carroll2008boltzmann"></a>
[4] Sean M. Carroll. "Richard Feynman on Boltzmann Brains." *Discover Magazine*, December 2008. [https://www.discovermagazine.com/richard-feynman-on-boltzmann-brains-765](https://www.discovermagazine.com/richard-feynman-on-boltzmann-brains-765). Accessed August 16, 2026.

<a id="ref-openclaw"></a>
[5] OpenClaw Foundation. "OpenClaw: Personal AI Assistant." [https://openclaw.ai/](https://openclaw.ai/). Accessed August 16, 2026.

<a id="ref-hermesAgent"></a>
[6] Nous Research. "Hermes Agent: The Agent That Grows with You." GitHub repository. [https://github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent). Accessed August 16, 2026.

<a id="ref-weng2026harness"></a>
[7] Lilian Weng. "Harness Engineering for Self-Improvement." *Lil'Log*, July 2026. [https://lilianweng.github.io/posts/2026-07-04-harness/](https://lilianweng.github.io/posts/2026-07-04-harness/).

<a id="ref-novikov2025alphaevolve"></a>
[8] Alexander Novikov et al. "AlphaEvolve: A Coding Agent for Scientific and Algorithmic Discovery," 2025. [arXiv:2506.13131](https://arxiv.org/abs/2506.13131).

<a id="ref-zhang2025darwingodelmachine"></a>
[9] Jenny Zhang, Shengran Hu, Cong Lu, Robert Lange, and Jeff Clune. "Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents," 2025. [arXiv:2505.22954](https://arxiv.org/abs/2505.22954). Submitted May 29, 2025; current arXiv version revised March 12, 2026.

<a id="ref-qi2026agentification"></a>
[10] Xiao-Liang Qi. "The Agentification of Scientific Research: A Physicist's Perspective," 2026. [arXiv:2604.14718](https://arxiv.org/abs/2604.14718).
