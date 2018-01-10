---
layout: page
title: Running Experiments
---

# Running Experiments
An A/B Testing Guide

## Overview
A/B testing as a process has been adopted across the tech industry and as it has become ubiquitous, it’s led to many engineers and PMs understanding what it is in concept, but not exactly how it’s used in practice to get meaningful results. This document hopes to clarify some details that are often hidden when talking about A/B tests and why it’s important to pay attention to the details of the setup process. Getting the details right ensures that your experiment is testing a metric it can meaningfully impact within a reasonable timeframe.
 
The classic A/B test is to change the color of a button on a signup form. 50% of users see the default blue button (the control group) and 50% of users see a green button (the treatment group) on the main page to begin the signup process. If the click-through rate on the green button is higher, then we’ve learned something, we change it to green, and we get a higher signup rate with little effort.
 
Google famously ran a test with 41 shades of the color blue to see which would optimize clicks on advertising links in Gmail. It’s been both used as an example of A/B testing’s promise of objective results over the Highest Paid Person’s Opinion (HiPPO) and ridiculed as excessive abdication of decision-making to data. A/B testing has great promise to inform decision-making but also potential for abuse in trusting experiment results that are statistically bound to give you the wrong result some of the time.

## What is A/B testing?
A/B testing on web and mobile is the technological equivalent to running double-blind studies. It’s the gold standard for experimentation because **_when designed correctly_**, it isolates the difference between the treatment and control experience to be only the thing you’re changing. Whether that’s a different screen flow, different button, or different response, the goal is for the users to be randomly assigned and for their experience to only vary by what you’re testing for **_if designed correctly_**.
 
I’ve emphasized the phrase **_designed correctly_** multiple times because it’s very easy to design an experiment that incorrectly assigns users to control and treatment groups, measure metrics that are influenced by events outside of what you’re testing, or run in a way where the results are not statistically valid.
 
Examples include A/B testing social features. A potentially problematic experiment could involve testing different Whisper interfaces to try to encourage more message-sending. The control and treatment groups may both experience an increase in messages sent due to the experiment. The treatment sees an increase because the interface has been improved, and the control also sees an increase because they are getting more messages from users in the treatment group. This is a case where the treatment / control split shouldn’t be done simply by device ID but perhaps chatters within a particular channel<sup id="a1">[1](#f1)</sup>. Careful design can mitigate unexpected results in experiments.

## When should we use A/B testing?
### Testing your hypothesis (you need a hypothesis!)
You may often be tempted to think “I’m not sure what we should do with this feature, let’s just test to figure it out.” This is the wrong way to go about A/B testing. Before you begin an experiment, you need to have a hypothesis (e.g. I believe that changing this button size to be larger will make it more obvious that this is the action we want this user to take, so the conversion will be higher). You also need to have a prediction. Which metric(s) do you think will be affected by this change, and by how much?

### Designing experiments
A/B testing plays an important role in product iteration along with user experience research and regular reporting on feature metrics. A well-designed experiment takes into account other feedback mechanisms and seeks to increase knowledge about a specific focus area of the product. Let’s look at a few examples of how experiments can validate product hypotheses in different parts of the product lifecycle.

#### Developing a new feature
When developing a new feature, it’s important to decide which specific metrics you will measure to determine if the feature is performing well or not. For example, you may want to keep track of signup rate, click-through rate and number of video plays when launching an opt-in email for recommended channels. Since it’s a new feature, it’s often advised to roll it out to a small percentage of users to make sure no critical bugs have gone unaddressed and to pay attention to any metric alerts.
 
If there were any design questions between how the feature should work from an interface standpoint, you can run a beta test prior to product launch where a small portion of users get specific treatments targeted to answer that question. Also, when trying to hone in on an optimal design you can improve the signal by having treatments that differ significantly and learn which direction to go in. Follow-up experiments can be run to further optimize those results.

#### Improving an established feature
With an established feature, experiments are often incremental where the treatment is focused on improving a specific set of metrics related to feature performance. For example, backend changes to the video player meant to reduce latency can be tested against the existing video player to see if there’s a meaningful consistent reduction in latency.
 
Experiments of this type have clear hypotheses for the predicted impact they will have and are narrow in scope. Changing the recommendations for YouTube's main page to improve total number of videos played is one example. This type of experiment typically represents the bulk of experiments run.

#### Testing a major feature change
For instances where a major change will be made to an existing feature, such as a website's front page, an effective experiment will include specific target metrics that can be compared to the existing control. Just like developing a brand new feature, it’s important to first test the treatment with a small population to make sure there are no critical bugs or dramatic drops to important metrics.
 
Often times the experiment will show that the redesigned feature performed worse than the control. Analysis can help determine what parts of the feature caused it to perform poorly and follow-up experiments can be used to iterate and improve its performance. Experiments that have negative results don’t mean you should give up, but that more data like user research interviews or surveys may be required to understand why something isn’t working before continuing onto the next iteration.
 
A more in-depth discussion of experiment design and creating hypotheses for product iteration–**coming soon**.

## Statistical basis for A/B testing
### Measuring metrics too far down the pipe
Retention is a popular metric for most web and mobile apps. Now, either you or your manager / director / CEO may be tempted to ask questions such as: if I change this button from red to blue, will it impact signups? Or: if we show people 3 more tutorial screens, will that impact retention?
 
These kinds of metrics are categorized as output metrics. They are broad and important for assessing success of any app as a whole. Your goal for an experiment should be to measure the impact of your treatment on these output metrics, but the treatment change may be small and limited to a particular feature. You’ll need a way to measure changes in your treatment more closely that will indicate if will affect the output metrics. These are called input metrics. For button variations, conversion rates (tap rates) make sense as input metrics. You can directly attribute more taps to your treatment vs. control.
 
If a feature change is significant, you can check minutes watched or retention to show that there was no negative impact due to the change you made. However, there are so many factors that drive users to decide to watch more minutes or not that your experiment’s impact is likely less than the natural variance over time. Most of the time your experiment will come out neutral. 
 
I recommend looking for leading indicators that are directly attributable to your experiment that correlate with the long term metric you care about–sessions per user for instance in place of retention. Or run your experiment on a segment of the population like mobile users in Korea where a positive experiment result may have a clearer signal. Also, when significant results are found for important metrics, it’s important to dig deeper with further experiments to isolate the driving factor or replicate the study to confirm it–perhaps running it for longer to gather more data or with fewer variants.

### Why historical (observational) data analysis is problematic
Sometimes it’s tempting for engineers to make a change across the whole app for a given period of time (say 1 or 2 days) and change it back. They assume that we can measure changes in our metrics on those days and attribute those to the change that was deployed. The problem is that many confounding factors now come into play. Weekly or annual seasonality could affect results. The size of the users exposed during the “treatment” period can’t be controlled and made comparable to the “control” period at any other time. That’s why A/B tests have treatment and control groups run concurrently. So the users exposed to the “treatment” are not equivalent to those who were exposed to the “control”. It’s also hard to ensure that statistically significant sample sizes are observed. Observational studies are possible when there is no other choice like when a change must be rolled out to everyone at once, but it becomes much more challenging to properly interpret the results.

## How many users do you need?
### Calculating [sample size](https://en.wikipedia.org/wiki/Sample_size)
Sample size calculators exist all over the internet. However, if you don’t understand the statistical assumptions being made by the calculator, your sample sizes may be too small to be statistically significant. I often recommend [Evan Miller’s sample size calculator](http://www.evanmiller.org/ab-testing/sample-size.html), which takes into account all the factors we’ll discuss from here although it’s limited to metrics like CTR.
 
We’re trying to calculate N, the number of users necessary to go through your experiment in order to achieve a statistically significant result with enough statistical power. That N depends not only on the significance level you’re looking for, but on the baseline rate of the metric you’re hoping to affect, the statistical power you’re hoping to achieve, and the minimum detectable effect you want to be able to measure.
 
This calculation assumes that the difference between the metric you are using to compare the two groups–often the mean–is normally distributed. The Central Limit Theorem (see [central limit theorem](https://en.wikipedia.org/wiki/Central_limit_theorem) for more detail) says you can use a t-test to compare means between two groups if they each have a large enough size (e.g. 100k+ users). But to compare other metrics like p90, you need to use techniques like an A/A permutation test to calculate sample size. The details of how this is done are outside the scope of this document but please see links in the references at the bottom, but here’s a quick explanation. Suppose we ran a fake experiment where nothing was different between treatment and control. Instead, we just split the population randomly 50/50. How far off would the two groups be? Is that bigger or smaller than the effect we think the A/B test would have if it wasn't a placebo?

### [Statistical significance](https://en.wikipedia.org/wiki/Statistical_significance)
Statistical significance is often misinterpreted by stakeholders. When a PM asks “is this data statistically significant?”, they are often asking if they can trust the result. The answer is not so clear-cut. 
 
In hypothesis testing, our null hypothesis is that treatment and control are no different from each other. That is always the default assumption. The alternative hypothesis we are testing for is that there is a nonzero difference between treatment and control. At a 95% significance level, if the treatment was no better than control, repeatedly running the experiment would show there was a difference 5% of the time. This 5% means that even if there was no difference between treatment and control, the experiment would still tell you there was about 5% of the time.
 
Let’s use an example to illustrate this. If the control is an existing screen with a 50% conversion rate on a button that takes you to the next screen, let’s say the treatment is the same screen with a different colored button. We run the experiment with the proper sample sizes and see that the control has a mean of 45% and the treatment has a mean of 55%. It looks like treatment is 10% (absolute, 22.2% relative) better than control. We can only be sure if we check the confidence interval of the difference between means and show that they don’t contain 0. If the 95% confidence interval around the difference between treatment and control is (+1%, +5%) then we can say with 95% confidence that the treatment is better than control.
 
What makes statistical significance tricky and not equivalent to “can I trust the result of this experiment” is that the two other concepts of statistical power and minimum detectable effect influence what you’re able to accurately measure and your confidence in the result.

### [Statistical power](https://en.wikipedia.org/wiki/Statistical_power)
Statistical power tells you how often the minimum detectable effect size is detected, assuming there was a difference between treatment and control. This is often set by convention to 80%. If your test doesn’t have enough statistical power, you may get a confidence interval that tells you there is no difference between treatment and control even though there may actually be a difference. That means essentially that you need a larger sample to be able to detect the difference and narrow the confidence interval.

### Baseline rates for your metric
First you need to know, what is the current rate for the metric you’re looking at? Let’s say you’re trying to improve the onboarding flow and you want to increase signup rates by making changes to the signup flow. We need to know what the current signup rate is to estimate how many users we’ll need in order to increase it by X%.

### [Minimum detectable effect](https://help.optimizely.com/Ideate_and_Hypothesize/Use_minimum_detectable_effect_to_prioritize_tests)
Minimum detectable effect can be thought of like resolution. If your minimum detectable effect is 5%, you'll only be able to measure that your treatment is actually better than the control if the difference is greater than 5%. What if you want to detect a smaller change, like 1%? You’ll need a larger sample size.

![Power analysis graph](img/power_minimal_detectableeffectandbucketsizeestimationinabtests95.thumb.1280.1280.png)

In hypothesis testing, there’s a relationship that defines the significance level (typically 95%), the statistical power (typically 80%) and the minimum detectable effect your hypothesis can distinguish. The smaller your minimum detectable effect, the larger your required sample size.
 
See [this blog post](https://blog.twitter.com/engineering/en_us/a/2016/power-minimal-detectable-effect-and-bucket-size-estimation-in-ab-tests.html) for a deeper dive into the math behind statistical power, significance level, minimum detectable effect and sample size.

#### Procedure for calculating sample size
1. Choose a metric to test for and grab the baseline rate for that metric
2. Choose a statistical significance level (say 95%)
3. Choose your statistical power (usually 80%)
4. Choose the minimum detectable effect size you’re hoping to measure (say 5%)
5. Input them into the sample size calculator to see how many users you’d need in each bucket (treatment and control) in order to meet the statistical standards you’d set in steps 2-3

### How long do you have to run the experiment?
1. Calculate how many **new** users you expect to run through your experiment each day
2. Calculate how many days you’ll need in order to reach the sample sizes you’d calculated in step 5
  * This will give you an estimate, but because many users return day after day, you need to look at how many incremental new unique users are being added to the experiment each day and how long it will take to reach the proper sample size
  * You can also regularly check how many total users have been through the experiment so far

#### Avoiding seasonality
It’s important that you end your experiment on the same day of the week so you avoid seasonality effects if looking over a short time frame (within a month). This is the same reason why financial results are often compared year-over-year so you aren’t comparing month-to-month where the results could be skewed by Christmas or other effects.
 
Many apps experience pronounced seasonality in their usage. Knowing trends for your product ensures your results aren’t affected by typical variations in viewing patterns.

#### Leaving a hold-out population to run an experiment longer
Sometimes you have to make a feature decision quickly and your experiment may have run for just long enough, but you’ve still got a 5% chance that the result was just due to randomness. One option is to leave a small hold-out population that doesn’t get the new feature for several months. You can check later to see if the result holds many months later.

## Analyzing the results
### Difference of proportions
When you are measuring a binary outcome where the user either completes an action or doesn’t, and your aggregate mean is a percentage between 0-100%, then you’re measuring a difference of proportions. The most common example of this is with click-through rate. The total experimental population sees a button, but only some percentage of them click on it. The percentage that complete that action gives you a click-through rate.
 
Measuring the difference between a control and treatment group for click-through rates is a specific case of a difference of proportions. You’re comparing percentage A in the control group with percentage B in the treatment group to see if there is a statistical difference between the two groups.
 
Most A/B testing tutorials and sample size calculators assume your A/B test is measuring a difference in proportions for simplicity. The error formulas are easier because you can assume a [binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution) (either the user converted or did not convert).

### Difference of means
A difference of means applies in the case where you’re measuring continuous numbers. How many followers are added on this screen in the treatment vs. control? How many minutes are watched in the treatment vs. control? The aggregate value will be a number from 0 to infinity (in some cases it can be negative too).
 
The important thing to note is that calculating a confidence interval for a difference of means is not the same as for a difference of proportions. Different statistical tests need to be used because the distribution of the data differs due to how the data was generated–with discrete values for each user of 1 if they completed the action, or 0 if they did not. With the difference of proportions, you could use a binomial distribution.
 
For a difference of means or proportions, if your sample size is large enough and each user’s behavior is independent of the others, you may be able to assume a normal distribution. This allows us to use some simple statistical tests to measure the confidence interval for normal distributions. But not all data even at large scales are normally distributed. In this case, we can use a method called bootstrapping to get confidence intervals.

### Calculating errors and confidence intervals
So you’ve got results for each user and you’ve got enough samples to reach the significance level you’re looking for. Now what?

The naive thing to do is to take the mean of the values between treatment and control. Measure how much bigger the treatment is than control (say 40%) and call it a day. Done, right? Nope. One thing many people miss is that your mean from your sample is **not** the mean of the total population of all users. It’s just the best estimate you have for that. But it will be off because even if you’re sampling in an unbiased way, there will be some variance. That means we can only be (for example) 95% sure that the **actual** population mean is within a range from our sample mean. That’s what a confidence interval is.

Let’s say you measure a 12% increase in minutes watched. You find that the confidence interval is +/- 14%, ie. (-2%, +26%). That means you can’t be sure that the actual effect of your treatment isn’t zero or even negative. You’re just 95% certain that the actual population mean is somewhere in that range. It could be at either end. From that standpoint, the 12% you measured in your experiment is not as strong a guide as to how well your feature performed without taking the confidence interval into account.

### T-tests, bootstrapping, Bayesian analysis
So how should you calculate the confidence interval?

#### Difference of proportions
If you’re measuring a difference in proportions, you have more options. The simple way is to calculate the standard error of the binomial distribution and add that +/- to the mean, which provides a confidence interval. The Agresti-Coull interval is simple to calculate and performs well (details [here](https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval#Agresti-Coull_interval)).

You can also use the Beta distribution following a Bayesian analysis to calculate the confidence interval in a different way. An explanation for that can be found [here](http://varianceexplained.org/r/bayesian_ab_baseball/).

#### Difference of means
**T-tests**
Assuming your sample size is large enough and each data point is independent of each other, you should be able to use a T-test to quickly get a confidence interval. R has built-in methods for this and Python has packages that let you calculate this. T-tests are subject to understanding a bit about the samples you’ve collected, if you’re looking for a one or two-tailed t-test, and whether the variance between the two distributions are the same or not. But in many cases the T-test will give you what you want<sup id="a2">[2](#f2)</sup>. See [here](https://en.wikipedia.org/wiki/Student%27s_t-test) for the theoretical explanation for T-tests.

#### General methods
**Bootstrapping**
What happens if you don’t have a large enough sample size to assume a normal distribution? What if the distribution isn’t normal to begin with? Bootstrapping is a technique that allows you to take data from any distribution and resample it over and over again to derive summary statistics when the amount of data is too low to use other tests. By resampling the data many times, aggregate mean and variance can be computed. This is useful because no matter the shape of your distribution, bootstrapping can be used to calculate a confidence interval. See [here](https://en.wikipedia.org/wiki/Bootstrapping_(statistics)) for an explanation of bootstrapping.

## Interpreting results
Now we have a confidence interval for our treatment vs. control. If our confidence interval is strictly positive, and if the lower bound of the confidence interval is greater than our minimum detectable effect, then yes, we can finally say that treatment is better than control and by how much.

| **Per Login Results** | **Control (50% of users)** | **Experiment (50% of users)** | **Raw Change** | **+/- @ 90% Confidence** | **% Change** | **Significant**|
| --------------------- | -------------------------- | ----------------------------- | -------------- | ------------------------ | ------------ | -------------- |
| Plays | 11.33 | 11.62 | 0.29 | 0.12 | 2.54 | TRUE |
| Displays | 68.79 | 72.04 | 3.24 | 0.35 | 4.71 | TRUE |
| Displays Over Index 5 | 4.16 | 5.90 | 1.74 | 0.06 | 41.81 | TRUE |
| Clicks | 2.06 | 2.15 | 0.09 | 0.14 | 4.38 | FALSE |

In the table above you can see that results where the difference in means–the raw change column–is greater than the 90% confidence interval indicates a significant effect. 

## Pitfalls and landmines of A/B testing
### What success rate can I expect from my experiments?
Experts in A/B testing from large firms (see references) suggest that around 10% of experiments yield positive results, with the vast majority yielding inconclusive or negative results. This means that for every positive result we must be skeptical and dig deeper to make sure the effect is real.

### Are my treatment and control truly randomized?
It’s critically important that the users in both treatment and control are selected randomly relative to each other. The best case is when your experiment is shown to every user of your app. Then as long as the experimental framework assigns each user randomly, you will have a valid test population.

But what if your experiment only happens after login? If you assign users before they log in, then you may have skewed groups because only certain users choose to login after they’ve already been assigned to an experiment. In this case it’s better to do the assignment after they’ve logged in. The same is true if the user needs to complete any steps in order to see the experiment. Try to assign the users as close to that point as possible.
 
 You can run checks and see that the distribution of users in each group matches closely with what you’ve set your experiment up for. One common practice for checking your experimental setup is to run an A/A test. This is when the treatment and control are functionally the same. The randomization algorithm is what’s being checked. If analysis between two identical treatments show statistical differences, then it is likely there is a bug in the randomized assignment.


### Are my events firing correctly?
Experiments are often created at the same time as new tracking is added for a feature to be tested. And often a few days into the experiment, you look at the results and find missing events, incorrect values, or other nonsensical data. This is when event tracking debugging becomes important. The first debugging focus area is the logic for the event being tracked and make sure it’s being implemented correctly. This is the explanation 90% of the time.

### The problem with peeking during the experiment run
It’s tempting to check on your experiment daily and see what the results look like. This can be problematic however, if you have not reached the sample size you had calculated. It’s better to just check once you’ve reached the predetermined statistically significant sample size. Sometimes early returns look promising and you may be tempted to stop the experiment early and deploy the change for all users. But due to the nature of statistics, often times positive results will return to the mean–no improvement. Even after the experiment’s timeframe has concluded, it may be tempting to continue the experiment if you don’t get a statistically significant result in the hope that it improves later.

The problem is that we’ve established that even with a 95% significance level, there’s a 5% chance that you’ll detect an effect that was due to random noise. If you check over and over again, you are compounding that chance. See [here](https://www.lucidchart.com/blog/the-fatal-flaw-of-ab-tests-peeking) for an explanation of this effect. As stated earlier, positive results in the best case should be checked with further experiments or reconfirmed. False positives are the scourge of every A/B test and confirmation bias usually encourages believing positive results.

### What if I'm close to 95% but not quite there?
95% is an arbitrary standard. It means 1 in 20 experiment is a fluke, aka a false positive. We could look for 99%, or even 99.9%, but then we’d risk missing out on results that are true but barely noticeable–we’d have more false negatives. There’s a balance to strike and many fields use 95% as a standard. So, concretely, what if you reach 93% significance (but not 95%)? You can still report your results, but caveat them with the lesser certainty. It’s often the case that you’re testing the performance of a relatively new product and you’re looking for strong indicators for product direction. The important question to ask in this case is: will the decision on the product be different if we are less certain of the experiment result? Will it change what we will do anyway? If the answer is no, then you can use a less significant result.

If the answer is yes, however, you may have to rerun the experiment for longer to validate the result. For results that are borderline, if they are for important changes, follow-up experiments to validate the result may need to be run. Even for results that “do no harm” there is still a 5% chance that they actually do harm but we did not detect it. So we need to be careful about launching new features even if they don’t seem to hurt metrics.

### What if my treatment sample size is much smaller than my control?
Sometimes instead of a 50%/50% split, experimenters will chose different splits such as 90%/10% or 99%/1%. This can be acceptable but you are limited by your smallest group sample size for determining how sensitive the experiment is. Also, a large imbalance in sample sizes between treatment and control can lead the variance of the smaller group to not be representative. Care should be taken. 

In general, a common reason people want to use a small sample size is because they are afraid the change will negatively impact users. In this case it’s better to make sure there are no bugs at the smaller proportion (1%) and if it’s okay, ramp up the split to 50% and finish gathering data for the experiment quicker.

### Can I test N different variants in one experiment?
Yes! However, the groups will be smaller, and therefore the confidence intervals larger. A practical consequence of this is that you will need to run your experiments for longer. Careful planning and reflection on the goals of the experiment should be taken before launching an experiment with multiple variants so valid results are received in the proper time frame.

### What are novelty effects?
Novelty effects are when your treatment changes the user experience enough that existing users behave differently at the beginning of the experiment than they do once they’ve gotten used to the change. Novelty effects often show up in users engaging much more with a feature when they are first introduced to the treatment but over time the engagement level drops off until it reaches its long term average. It’s important to be aware of this effect because it’s easy see a jump in your treatment metrics for your experiment early on that gives you a false sense that the experiment has succeeded before enough time has elapsed, enough data points are collected, and users have acclimated to the change.

### What about latency?
One result that has held for online products time and again is that latency hurts engagement. When a user has to wait longer for results to come back or for any interaction with a website or app, the likelihood the user abandons increases. This is important because adding new features if not designed correctly often increases latency. Early versions of new features that are tested in experiments may increase latency and result in no positive change. Once latency is taken into account, a positive change _may_ be possible. Latency is just one part of feature optimization and iteration during experimentation along with resolving bugs, improving the user experience through feedback, etc.

## References
* [Controlled Experiments on the Web: Survey and Practical Guide](https://ai.stanford.edu/~ronnyk/2009controlledExperimentsOnTheWebSurvey.pdf)

* [Seven Rules of Thumb for Web Site Experimenters](http://www.exp-platform.com/Documents/2014%20experimentersRulesOfThumb.pdf)

* [Online Experimentation at Microsoft](http://fabijan.info/papers/ICSE17_TheEvolutionOfCE_preprint.pdf)

* [Online Experiments: Practical Lessons](http://ai.stanford.edu/~ronnyk/IEEE2010ExP.pdf)

## Footnotes
<b id="f1">1</b> When you assign experiment groups at a level other than the individual (in this case by channel) it affects your standard errors and needs to be compensated for properly to maintain statistical power. [↩](#a1)

<b id="f2">2</b> A word of warning: there are many assumptions built into t-tests that must be true for the result to be valid. One of those is independence. E.g. each data point comes independently from every other. But we know this isn’t always true because the same user’s actions are often recorded multiple times in an experiment and their subsequent actions do depend on their previous actions. If you don’t want to worry about these kinds of concerns, using more robust methods like bootstrapping may be better. [↩](#a2)
