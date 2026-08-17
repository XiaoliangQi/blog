---
title: "Nonlocality of Concepts"
date: "2026-08-17"
summary: "A teaser for our article on using nonlocality to measure how abstract a language-model feature is."
---

Original article: [Measuring Semantic Abstractness of SAE Features via Nonlocality](https://arxiv.org/abs/2608.10537)

Together with Chuqiao Lin and Shivaji Sondhi, I recently wrote an article about a question that came from physics: what does nonlocality mean for concepts?

In holographic duality, which has been central in my own work, nonlocality is not just a technical complication. It is one of the clues that a lower-dimensional theory may contain an emergent geometric direction. Roughly speaking, length scale behaves like an extra dimension. This paper starts from a similar intuition, but asks the question inside language models.

If a model has a feature for a concept, how local is that feature? Does it fire because of a nearby token, like a name, a phrase, or a formatting cue? Or does it fire because information spread over many tokens collectively points to a more abstract idea, such as uncertainty, reasoning, or intent? In other words, can a concept inside a model have something like a length scale?

To make this question quantitative, we study sparse-autoencoder features and define feature nonlocality: a measure of how broadly the activation of a feature depends on earlier positions in the context. Low-nonlocality features behave like local detectors. High-nonlocality features have a longer contextual reach, and are better candidates for representing genuinely semantic or abstract information rather than surface tokens.

The full article follows this idea through experiments on feature geometry, reasoning features, jailbreak-related features, and steering. But the main point is simpler than any one result: nonlocality may give us a new coordinate for thinking about concepts. If holography teaches us that geometry can emerge from scale, perhaps interpretability can learn something similar. Concepts may not only have meanings; they may also have characteristic ranges over which those meanings are assembled.
