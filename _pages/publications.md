---
layout: page
permalink: /publications/
title: publications & patents
description: Peer-reviewed research papers and global patent filings.
nav: true
nav_order: 2
---

{% include bib_search.liquid %}

<div class="publications">

  <h2 class="category">Research Publications</h2>
  {% bibliography -f papers -q @*[category=Research Publications]* %}

  <h2 class="category mt-5">Patents</h2>
  {% bibliography -f papers -q @*[category=Patents]* %}

</div>