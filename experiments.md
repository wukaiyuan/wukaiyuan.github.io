---
layout: page
title: A/B Testing Resources
---

## Frameworks
* [Planout](https://facebook.github.io/planout/)
* [Wasabi](https://github.com/intuit/wasabi)

## Articles
* [Why overlapping confidence intervals don't imply non-significance](https://medium.com/towards-data-science/why-overlapping-confidence-intervals-mean-nothing-about-statistical-significance-48360559900a)

### Pinterest
* [Benefits of hold-out groups](https://medium.com/@Pinterest_Engineering/how-holdout-groups-drive-sustainable-growth-35a4786c3801)
* [Building Pinterest’s old A/B testing process](https://medium.com/@Pinterest_Engineering/building-pinterests-a-b-testing-platform-ab4934ace9f4)
* [Monitoring A/B experiments in real-time](https://medium.com/@Pinterest_Engineering/monitoring-a-b-experiments-in-real-time-5cd3ee611c1)

### Airbnb
* [Experiments at Airbnb](https://medium.com/airbnb-engineering/experiments-at-airbnb-e2db3abf39e7)
* [Selection Bias in Online Experimentation](https://medium.com/airbnb-engineering/selection-bias-in-online-experimentation-c3d67795cceb)

### Netflix
* [Netflix experimentation platform](https://medium.com/netflix-techblog/its-all-a-bout-testing-the-netflix-experimentation-platform-4e1ca458c15)
* [Netflix experiment examples](https://medium.com/netflix-techblog/selecting-the-best-artwork-for-videos-through-a-b-testing-f6155c4595f6)

### Twitter
* [Twitter’s experimentation platform](https://blog.twitter.com/engineering/en_us/a/2015/twitter-experimentation-technical-overview.html)
* [Detecting and Avoiding Bucket Imbalance in A/B Tests](https://blog.twitter.com/engineering/en_us/a/2015/detecting-and-avoiding-bucket-imbalance-in-ab-tests.html)
* [Implications of use of multiple controls in an A/B test](https://blog.twitter.com/engineering/en_us/a/2016/implications-of-use-of-multiple-controls-in-an-ab-test.html)
* [Power, Minimal Detectable Effect and Bucket Size Estimation in A/B Tests](https://blog.twitter.com/engineering/en_us/a/2016/power-minimal-detectable-effect-and-bucket-size-estimation-in-ab-tests.html)

### Stripe
* [Reproducible research at Stripe](https://stripe.com/blog/reproducible-research)

### Etsy
* [Continuous experimentation at Etsy](http://mcfunley.com/design-for-continuous-experimentation)

### Uber
* [Building an Intelligent Experimentation Platform with Uber Engineering](https://eng.uber.com/experimentation-platform/)

### LinkedIn
* [XLNT Platform: Driving A/B Testing at LinkedIn](https://engineering.linkedin.com/ab-testing/xlnt-platform-driving-ab-testing-linkedin)

### Stitch Fix
* [So, You Need a Statistically Significant Sample?](http://multithreaded.stitchfix.com/blog/2015/05/26/significant-sample/)

## Papers
### Microsoft - almost all available from their excellent [website](http://exp-platform.com)
#### Best papers
* [Online experimentation at Microsoft](http://fabijan.info/papers/ICSE17_TheEvolutionOfCE_preprint.pdf)
* [Controlled experiments on the web: survey and practical guide](https://ai.stanford.edu/~ronnyk/2009controlledExperimentsOnTheWebSurvey.pdf)
* [Seven rules of thumb for web site experimenters](http://www.exp-platform.com/Documents/2014%20experimentersRulesOfThumb.pdf)
* [Online experiments: Practical lessons](http://ai.stanford.edu/~ronnyk/IEEE2010ExP.pdf)

#### Other good references
* [Online experiments at large scale](http://www.exp-platform.com/Documents/2013%20controlledExperimentsAtScale.pdf)
* [Improving the Sensitivity of Online Controlled Experiments by Utilizing Pre-Experiment Data](http://www.exp-platform.com/Documents/2013-02-CUPED-ImprovingSensitivityOfControlledExperiments.pdf)
* [Online controlled experiments (slides)](https://expplatform.sharepoint.com/Documents/2012-09%20ACMRecSysNR.pdf)
* [Online controlled experiments: Lessons from Running A/B/n Tests for 12 years (slides)](http://www.exp-platform.com/Documents/2015-08OnlineControlledExperimentsKDDKeynoteNR.pdf)
* [Trustworthy Online Controlled Experiments: Five Puzzling Outcomes Explained](http://www.exp-platform.com/Documents/puzzlingOutcomesInControlledExperiments.pdf)
* [Trustworty Analysis of Online A/B Tests: Pitfalls, challenges and solutions](http://www.exp-platform.com/Documents/2017WSDMDengLuLitz.pdf)
* [Continuous Monitoring of A/B tests without pain: Optional stopping in Bayesian testing](http://www.exp-platform.com/Documents/2016DSAAcontinuousMonitoringDengLuChen.pdf)
* [Measuring Metrics](http://www.exp-platform.com/Documents/2016CIKM_MeasuringMetrics.pdf)
* [Objective Bayesian Two Sample Hypothesis Testing for Online Controlled Experiments](http://www.exp-platform.com/Documents/BayesianAB.pdf)
* [Data-driven Metric Development for Online Controlled Experiments: Seven Lessons Learned](http://www.exp-platform.com/Documents/2016KDDMetricDevelopmentLessonsDengShi.pdf)
* [What works in e-commerce - a meta-analysis of 6700 experiments](http://www.qubit.com/sites/default/files/pdf/qubit_meta_analysis.pdf)

### LinkedIn
* [From Infrastructure to Culture: A/B Testing Challenges in Large Scale Social Networks](https://content.linkedin.com/content/dam/engineering/site-assets/pdfs/ABTestingSocialNetwork_share.pdf)

### Google
* [Measuring the user experience on a large scale](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/36299.pdf)
* [Overlapping Experiment Infrastructure: More, Better, Faster experimentation](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/36500.pdf)

### Netflix
* [Improving the Sensitivity of Online Controlled Experiments](http://www.kdd.org/kdd2016/papers/files/adp0945-xieA.pdf)
* [The Netflix Recommender System: Algorithms, Business Value, and Innovation](https://pdfs.semanticscholar.org/e9dd/899f0e599eafb4fe47696c83d07d971c0088.pdf?_ga=2.89037275.1750582391.1498690846-2119557290.1498690846)

### Facebook
* [Uncertainty in online experiments with dependent data: An evaluation of bootstrap methods](http://chbrown.github.io/kdd-2013-usb/kdd/p1303.pdf)

### Other
* [A/B Testing using the negative binomial distribution in an internet search application](http://www.tau.ac.il/~saharon/papers/AB%20testing%20with%20NB%20distribution%20-%20revision.pdf)
* [Confidence intervals for AB-test](https://arxiv.org/pdf/1501.07768.pdf)
* [Econometrics of Randomized Experiments](https://arxiv.org/pdf/1607.00698.pdf)

## Good ideas for A/B test experiments from the papers
* Combined experiments. Per-user with x% chance of seeing treatment
* Metrics definitions as discussed in the Microsoft paper
* Learning experiments where you intentionally degrade the experience to see how it affects the baseline
* Digging deeper into adoption and retention
* Surprising results should be replicated
* Risk of focusing on small changes is incrementalism. Should be tried to get some high ROI but also some big bets for audacious goals
* Changes rarely have a big impact to key metrics – corollary: only ~10% of experiments have any positive result
* Metrics improvements should be diluted to their segment size (mobile -> overall MW)
* Borderline significant results should be tentative and experiments rerun to verify
* If the result is so good (e.g. 8 sd from mean) then check again even if statistically significant
* Best to test yourself as many explanations for amazing A/B test results are wrong
* Can quantify latency’s effects by artificially slowing down a site
* Can we do a speed-up experiment by allowing response and delaying loading social column?
* Reducing abandonment is hard, shifting clicks is easy
* Delta method instead of bootstrap when data sizes are large (See Casella & Berger - Statistical Inference or Wasserman - All of Statistics)
* ANOVA as an alternative to t-tests when comparing the means of more than 2 samples
* Check experiment groups religiously for equal sizes and variances via A/A tests
* Check for browser-specific bugs
* Filter out users who didn’t even reach the page you have the treatment on for lower variance and better power (aka triggering)
* Check for server-related caching issues
