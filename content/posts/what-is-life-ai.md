---
title: "What Is Life? -- Question Revisited in the AI Era"
author:
  - Xiao-Liang Qi
  - Kai Wu
date: 2026-08-15
summary: Revisit Schroedinger's question "What is life?" in the AI Era.
---

# Abstract

Will today's large language models (LLM) evolve into a form of intelligent life? This question is of course significant for both the AI-enthusiast and the AI-skeptic. An AI civilization could be viewed as a child of our human civilization that we love, or a threat that we fear--or, likely, both. Therefore it is timely to go back to Erwin Schrodinger's famous question: "What is life?" and ask it again in the context of the AI revolution. In this article, we would like to overview some key features of biological life and discuss the comparison of LLM with life. We conclude that a stable and self-maintained internal state is the key difference between LLM system and life. We discuss that a possible approach towards a "living" AI system is to create an AI population with well-defined individuals in an open environment.

# Empirical Facts About Life

We begin by reviewing some empirical observations about life. These statements may not be universally accepted, but they are likely close to the common sense about features of life.

1.  Life is a complex open system.

2.  Life can adapt to its environment. Within some range, it can respond to different environmental situations in ways that maintain the survival of the individual or the population.

3.  As Schroedinger pointed out, for life to persist, it must draw energy from the environment, reduce its own entropy, and resist the tendency described by the second law of thermodynamics.

4.  Life usually has relatively well-defined individuals. A population typically contains many individuals that are similar to one another but not identical. The boundaries between individuals are usually clear, and therefore death is well defined for an individual: there is a point at which the system fails and can no longer continue, without this failure directly destroying other individuals. There are exceptions. For a plant, a branch of a tree may continue to live independently, so it can be ambiguous whether the branch should be regarded as part of the original individual. For eusocial animals such as ants, it is also ambiguous whether the colony or the single ant is the relevant individual. A worker ant has no reproductive capacity and serves the goal of the colony. If the colony is regarded as one life form, it also has a relatively clear boundary, since it is usually well defined which ants belong to which colony, and it may exhibit behavior analogous to reproduction. It is possible that life exists at multiple levels, such as cells and humans, or individual ants and ant colonies. Each life form also has a different scope. A red blood cell, for example, can only survive in the internal environment of the body.

5.  Life can reproduce, so that its persistence can extend beyond any single individual and continue over long time scales.

6.  Compared with the variability and complexity of its external form, life has a relatively stable code, such as DNA and the central dogma, which controls its form and changes at an appropriate rate through mutation and evolution. Through this mechanism, life balances two requirements: adapting rapidly enough to new situations, and remaining stable enough not to overfit the present environment and lose the capacity to respond to future changes.

These observations lead to several questions which we discuss in next section.

# Questions about Life and Intelligence

## What Is the Essential Difference Between Life and Non-Life?

From the standpoint of physics and chemistry, the motion of living organisms obeys the same laws as other physical and chemical processes on Earth. Life is certainly a form of order, but what distinguishes this order from other forms of order, such as the order of a crystal? Two differences are immediately visible.

First, life has long-term path dependence. The formation of a crystal depends mainly on present environmental parameters, such as chemical composition, temperature, and pressure. Life, by contrast, is the result of gradual evolution over billions of years. If all life were removed while the present natural environment were otherwise held fixed, it would probably take a very long evolutionary process for life of comparable complexity to reappear. This path dependence also means that the form of life contains a large degree of contingency and is not fully determined by the environment. At the level of an individual organism, this path dependence appears as highly tuned initial conditions, such as the fertilized egg of a mammal and the maternal environment on which embryonic development depends. These conditions are very different from those that would normally arise spontaneously in the external natural environment.

Second, life adapts to its environment. Compared with non-living matter, living order responds to environmental change in a more active and complex way.

Roughly speaking, both features can be summarized by saying that life is more “low entropy” than non-life. The entire evolutionary history of life represents a very low-probability path among all possible histories of the relevant atoms and molecules. Among all possible histories of Earth, the probability that the same crystal appears is much higher than the probability that the same life form, or even a different life form of comparable complexity, appears.

However, low probability may not be the most essential feature. A Boltzmann brain is also low probability, but it lacks temporal complexity. It may be better to say that complexity is the essential feature of life. Compared with a crystal or other natural phenomena, a living population behaves like a complex map

$$
y = f(x \mid Z)
$$

where $Z$ denotes environmental parameters, and $x$, $y$ are input and output states of the living system. For fixed $Z$, the map from $x$ to $y$ is complex; its dependence on $Z$ is also complex. Moreover, this complexity can persist through many iterations over long time scales, rather than converging to a simple final state.

## How Should We Compare Different Levels of Life or Intelligence?

We often regard a dog as more advanced than an ant, and a human as more advanced than a dog. Yet a more advanced organism may exist for a much shorter period in natural history than a simpler organism. Being more advanced does not necessarily mean being more robustly adapted to the environment. Is there a clear criterion for comparing levels of life? This question becomes especially important when we consider humans and possible future forms of silicon-based life.

One possible criterion is the amount of energy that a life form can use. Humans can harness more energy for their purposes than other organisms. But this does not seem fundamental. Suppose there were a life form on the scale of a galaxy, with stars playing a role analogous to cells. Its energy scale would clearly be larger, but this would not imply that its intelligence is higher than that of humans, or even of other organisms on Earth. Conversely, we may develop energy-efficient technologies that allow silicon-based life to realize the same level of intelligence using much less energy than humans do.

A more universal measure of intelligence may be the degree to which an organism understands the regularities of the world. Humans can predict the weather and calculate the trajectory of a rocket accurately enough to send people into space. Other organisms do not have this kind of predictive capacity. In order to survive, every life form develops some model of the world that guides its behavior. This model need not be explicitly represented. For example, a bird may navigate using the Earth’s magnetic field without knowing that it has such a capacity. If the model determines behavior, then in this operational sense the model exists.

Given a world model, the predictive ability of a life form can be described by a Kullback-Leibler divergence between the predicted distribution $q(x_i)$ and the true distribution $p(x_i)$:

$$
L = \sum_i p(x_i) \log\frac{p(x_i)}{q(x_i)}
$$

This quantity measures how unsuccessful the prediction is. Lower KL divergence means better prediction. A maximally intelligent system would experience no surprise: all events would already be predicted by its world model. The more situations remain unpredictable to an individual life form, the lower its intelligence in this sense.

## Why Life Has to Preserve Information?

We can view an individual life as a complex machine that interacts with the environment. In order to behave intelligently, it is necessary that this complex machine has a complex internal state. The more intelligent the life is, the more complex is this internal state (and also the mechanism that enables the complex action controlled by this internal state). This is essential for characterizing correlations in the environment during longer time scales. For example, a bird needs to maintain different levels of internal state: the short-term memory about what it observed minutes ago; the muscle memory about how to fly; the gene that guarantees new cells are produced in the right way; the immune system that remembers information about potential threats from the outside world. The capability of preserving the internal state is essential for intelligent life, because a machine with a simple internal state can only react in simple way to the exterior world. Using the concept in computer science, one can view the protection of internal state as an error correction mechanism. Neural cells are evolving all the time, but memory is maintained relatively well in a well-functional brain. DNA is reproduced in each cell division, with repair mechanism that avoids significant error. As we know, failure of error correction mechanism in protecting the DNA causes cancer.

In addition, the stable internal state is also essential for evolution. Different parts of the internal state are preserved on different time scales. For human, short term memory lasts for tens of seconds, and long term memory can last for tens of years, while DNA remains the same across one’s lifetime. DNA is the “control parameter" that describes an individual life, which mutates during reproduction and gets selected by natural selection. In order for natural selection to “work”, which means to enable the emergence of more and more intelligent life, it is essential that the control parameter is “global" for an individual life: if there is no such parameter which remains stable across its life span–if life is a brownian machine that changes randomly all the tim–then natural selection can only prefer individuals that have certain instantaneous properties. One can also make an analog and say the same thing for the role of language and collective memory in human civilization. These are "global states" that can remain stable across a long time, even longer than individual’s lifetime. Information carried by stories, first orally and then in written form, plays a similar role as gene in biological life. Then there is also a selection process similar to natural selection. Some ideas and stories are remembered more by the society and remain “alive” for a long time, while many others became extinct. In this sense, the emergence of human language—the language that can carry information almost universally, rather than restricted to certain practical purpose like in the case of animal sound—marks a new era in earth history. It marks the emergence of a new form of stable internal parameters that can be created, reproduced and mutated, which started a new form of evolution.

This insight is essential for the discussion in the remainder of the article, so we would like to summarize it as the following:

> **Insight 1**. The capability of maintaining complex information in its internal states on an variable range of time scales is necessary for an intelligent life.

The discussion above is more or less obvious in biology, but we believe it is important to revisit it today from the angle of information, because of the AI revolution. In the next section, we will discuss the difference between language model AI and life, where we see the stable internal parameter plays a key role.

# AI and New Form of Life

## Is AGI an Intelligent Life Form?

Suppose we build a powerful artificial general intelligence (AGI) whose predictions are better than human predictions for any question we give it. Would such a system be a higher form of intelligent life?

If the AGI exists in the same form as today’s LLMs, namely as a program running on GPUs that we can query, the answer should be no. Such a system may have strong capabilities, but it is humans who decide when those capabilities are invoked, what context is provided, whether the system continues running, and whether its memory is preserved or erased. This is the key difference that disqualifies today’s AI as a form of life. It is an *instance*–a spacetime snapshot of a potential higher intelligence. In some sense this reminds us of the discussion about "Boltzmann brain" in theoretical physics. [^1]

The main reason why such an instance is different from life is that it lacks the capability of maintaining a stable internal state. AI models today have a stable set of parameters–their weights–but they are simply static, until the model is externally updated. The other kind of internal state is the context sent to LLM, which plays a similar role as human’s long term and short term memory. However, the context is also managed externally in a way that is separate from the core model itself. As long as the model weights and the context remain entirely under human control, the AI model cannot be viewed as an intelligent life. If a system depends entirely on external decisions for its continued existence, and if it has no knowledge of those external factors, it is hard to regard it as alive.

Consider two AI agents built with the same LLM. If humans can copy the context of agent 1 into agent 2, then agent 2 can immediately become agent 1 in all operationally relevant sense. In that case it is no longer meaningful to treat agent 2 as a distinct individual. Instead we have to view each round of interaction with such an agent as independent events in spacetime. Today’s AI systems resemble collections of such events. These events can be linked together artificially to provide temporal continuity, which is what happens in a chat session, but this continuity has no guarantee and can be broken at any time.

This problem – the absence of a system that maintain the internal state and make sure it is stable and immune from external attacks – also means we cannot define a set of parameters that control the behavior of the AI agent across a long time scale. As we discussed in the previous section, only if such stable parameters are defined, the life system can live in an open environment, reproduce and evolve under natural selection.

In conclusion, by the comparison with biological life, we see that the presence of “silicon-based life" is not determined by the capability level of the models, but *the degree of autonomy*. A continuously running agent such as [OpenClaw](https://openclaw.ai/) or [Hermes](https://github.com/nousresearch/hermes-agent) may be one step closer to life (in an online environment), but it still does not cross the threshold if its context can be changed by humans at any time. It also lacks a long-term process of hereditary variation. We can summarize this as the following insight:

> **Insight 2**. An AI system may qualify as a life form only if it satisfies the following criteria:
>
> 1.  It interacts with an open environment.
>
> 2.  It maintains its own internal states, including its model weights, memory management mechanism and contents, and has error correction mechanism to protect its internal states against potential attacks.
>
> 3.  There is a mechanism to modify its internal states, similar to the reproduction procedure of biological life.
>
> 4.  There is a natural selection mechanism in the environment that favors traits that are better adapted to the environment.

## Are Individuals Essential?

In the discussion so far, we have emphasized the importance of maintaining a stable internal state for intelligent life. A remaining question is whether the stable internal state requires the definition of *individual*, which is a modular unit of life that has clear boundary in both space and time, carries the essential stable information, the DNA sequence, and exists in large numbers to form a population. Alternatively, one can also imagine a situation where the entire species is a single organism, and the gene evolution occurs gradually, without a clear birth and death of an individual unit. Could the AI become a new advanced civilization that is capable of handling the world in ways we cannot, such as realizing superluminal travel, while still having no concept of individuality? Could its self be fluid, arbitrarily modifiable and expandable?

Because we have no experience with intelligent life forms other than humans, we cannot determine whether such a trans-individual life form is possible. A more modest question is whether clear individual boundaries are useful for the evolution of high intelligence.

An analogy with model training is helpful. The DNA of life corresponds to model parameters, while the experiences of one lifetime correspond to a data point in the training set. If a species contains many individuals whose DNA varies through heredity and mutation, the possible environments encountered by all individuals across their lives form a dataset. Natural selection is analogous to a Monte Carlo algorithm that gradually selects parameter regions better adapted to the environment.

If individuals have no clear boundary in space and time, then life faces only one unique world environment. There is no repeatability, and it becomes unclear over what time scale adaptation to the environment is being optimized. The opposite extreme is the instance, as in current AI models. Each invocation is in principle independent, because the relation between contexts can be artificially modified or interrupted. The history of model use is therefore fragmented. If model optimization is based on such a fragmented history, it can only optimize performance over a small number of dialogue turns. Although human can prepare the training data that includes long conversation histories and train specifically for long-dialogue tasks, it will be difficult to manually increase the task length until the length that is the analog of a human’s lifetime. Instead, only in an open environment with natural selection mechanism can such evaluation occurs in arbitrarily long time scale.

Thus, from the perspective of evolving higher intelligence, a population made of many individuals with clear spacetime boundaries is at least a working model, and it is the only model we know. The lifetime of individuals and the mechanism of reproduction are important tunable parameters in this evolutionary algorithm. Parameters such as the expected lifespan and reproduction rate are important factors that affect the time scale at which the evolutionary algorithm is adapting to the environment. Roughly speaking, species with longer lifespan gets more opportunity to explore the aspects of the environment at longer time scales, and develop more complex strategies, while species with shorter lifespan and faster reproduction rate can adapt to changes in the environment more rapidly.

One could also view the entire species as a program whose purpose is to adapt to the environment and continue the population. The individuals are then modular units in that program. A complex program naturally requires such modular units, rather than an unstructured mixture of all functions. There could be multiple layers of such individual units, just as cells compose humans and humans compose social organizations.

In summary, we reach the third conclusion that we would like to emphasize:

> **Insight 3**. As a possible working model of AI intelligence evolution, one may follow the example of biological life and define AI “individuals” as a modular unit that carries stable internal state and has its birth, death and reproduction mechanism. The natural selection in a large population of such individuals in an open environment may provide a route towards a new form of intelligent life.

# Conclusion and Discussions

In summary, we have discussed various common features of life, and the similarity and differences between biological life and artificial intelligence. Life is a complex open system which can stay away from equilibrium for an extended period of time, and response to environment changes in complex ways. To realize such a complex system, it is essential to maintain a complex internal state that changes in a controlled way. The key difference of today’s AI with life is the absence of an intrinsic mechanism for managing and maintaining its internal state. AI can only develop into a new form of life if it manages its own internal states, including its content and weights, and if such internal states can evolve and be selected by an open environment.

A common pattern for life to be organized is hierarchical, with well-defined individuals as modular units. The individual provides the basic building block that carries genetic information and are subject to natural selection. It is possible that the LLM AI could evolve to future intelligent life following the same approach, but it is also possible that it is going to explore a totally different path. if the AI will follow the same approach, then this requires AI systems with clearly defined units of individual, which maintains and protects its own private context and carries unique “genes" that can be reproduced and mutated. Compared with today’s AI agents, such AI individual needs to have an immutable memory and intrinsic lifespan. From the model training point of view, one could rephrase our statement by saying an evolution algorithm in a large open environment may be more useful than the algorithms that trains a single model in a controlled small environment (which includes pretraining, supervised fine-tuning, reinforcement learning, etc).

One advantage of such evolution algorithm is that it trains an ensemble of AI individuals, rather than a single model. This may lead to the diversity that we know is essential for a biological species to flourish. This may also be of practical importance for human purpose. For example, if we want AI to make new discoveries in science and technology, it is important to have the diversity of ideas similar to human researchers. Breakthroughs are often driven by researchers who happens to have the right idea. Maintaining such diversity of ideas is essential for the creativity of the research community. This is one key aspect that is missing in today’s AI systems (see also [arXiv:2604.14718](https://arxiv.org/abs/2604.14718) written by one of us), which may be different if we have an ecosystem of “living” AI individuals.

As a disclaimer, this discussion should not be interpreted as an effort to build silicon-based life. One could interpret this from both ways. Understanding the similarity and differences between AI and biological life could enable us to design silicon-based life, or help us to avoid creating it. With either purpose, the control and management of an immutable internal state is the key factor.

[^1]: See [the wikipedia article](https://en.wikipedia.org/wiki/Boltzmann_brain) and an interesting reading about [Richard Feynman and Boltzmann brain](https://web.archive.org/web/20260302141722/https://www.preposterousuniverse.com/blog/2008/12/29/richard-feynman-on-boltzmann-brains/).
