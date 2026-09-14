import selfPortrait from '../images/self-portrait.jpg';

import deathOfImaginationV1P1 from '../images/death-of-imagination-v1-p1.png';
import deathOfImaginationV1P2 from '../images/death-of-imagination-v1-p2.png';
import deathOfImaginationV2P1 from '../images/death-of-imagination-v2-p1.png';
import deathOfImaginationV2P2 from '../images/death-of-imagination-v2-p2.png';
import deathOfImaginationV3P1 from '../images/death-of-imagination-v3-p1.png';
import deathOfImaginationV3P2 from '../images/death-of-imagination-v3-p2.png';

import thingThatFeeds1 from '../images/thing-that-feeds-1.png';
import thingThatFeeds2 from '../images/thing-that-feeds-2.png';
import thingThatFeeds3 from '../images/thing-that-feeds-3.png';
import thingThatFeeds4 from '../images/thing-that-feeds-4.png';
import thingThatFeeds5 from '../images/thing-that-feeds-5.png';
import thingThatFeeds6 from '../images/thing-that-feeds-6.png';

const projects = [
    {
        slug: 'roodkapje',
        title: 'Roodkapje',
        year: '2022',
        category: 'animation',
        mediaType: 'video',
        featured: false,
        size: 'landscape',
        image: null,
        youtubeId: 'xrY8k3Edvxg',
        gallery: [],
    },
    {
        slug: 'the-hole',
        title: 'The Hole',
        year: '2022',
        category: 'animation',
        mediaType: 'video',
        featured: true,
        size: 'landscape',
        image: null,
        youtubeId: 'ndoOlZ-rNmI',
        gallery: [],
    },
    {
        slug: 'ew',
        title: 'EW',
        year: '2022',
        category: 'animation',
        mediaType: 'video',
        featured: false,
        size: 'square',
        image: null,
        youtubeId: '8X2CfXvHUf8',
        gallery: [],
    },
    {
        slug: 'who-am-i',
        title: 'Who Am I?',
        year: '2023',
        category: 'animation',
        mediaType: 'video',
        featured: false,
        size: 'landscape',
        image: null,
        youtubeId: '1D8bhRO48O4',
        gallery: [],
    },
    {
        slug: 'gieser-wildeman',
        title: 'Gieser Wildeman',
        year: '2024',
        category: 'animation',
        mediaType: 'video',
        featured: true,
        size: 'large',
        image: null,
        youtubeId: 'EP-BlxKvsQM',
        gallery: [],
    },
    {
        slug: 'werkproces',
        title: 'Werkproces',
        year: '2024',
        category: 'animation',
        mediaType: 'video',
        featured: false,
        size: 'landscape',
        image: null,
        youtubeId: 'DJJCRCPqr-4',
        gallery: [],
    },
    {
        slug: '24-hour-challenge',
        title: '24 Hour Challenge',
        year: '2024',
        category: 'animation',
        mediaType: 'video',
        featured: false,
        size: 'square',
        image: null,
        youtubeId: 'DY2JXgGp7N8',
        gallery: [],
    },
    {
        slug: 'zenith',
        title: 'Zenith',
        year: '2025',
        category: 'animation',
        mediaType: 'video',
        featured: true,
        size: 'portrait',
        image: null,
        youtubeId: 'd0PubmzyZjQ',
        gallery: [],
    },
    {
        slug: 'io-project',
        title: 'I.O. Project',
        year: '2025',
        category: 'animation',
        mediaType: 'video',
        featured: false,
        size: 'landscape',
        image: null,
        youtubeId: 'XtaV6YOTEC4',
        gallery: [],
    },
    {
        slug: 'journey-lorraine',
        title: 'Journey Lorraine',
        year: '2025',
        category: 'animation',
        mediaType: 'video',
        featured: false,
        size: 'large',
        image: null,
        youtubeId: 'OeyaSXhVIVw',
        gallery: [],
    },
    {
        slug: 'time-is-fishy',
        title: 'Time Is Fishy',
        year: '2026',
        category: 'animation',
        mediaType: 'video',
        featured: true,
        size: 'large',
        image: null,
        youtubeId: '7z7TOa27Y6Y',
        gallery: [],
    },
    {
        slug: 'the-death-of-imagination',
        title: 'The Death of Imagination',
        year: '2022',
        category: 'illustration',
        mediaType: 'image',
        featured: false,
        size: 'large',
        image: deathOfImaginationV3P1,
        youtubeId: null,
        gallery: [
            {
                image: deathOfImaginationV3P1,
                caption: 'Version 3 · Page 1',
            },
            {
                image: deathOfImaginationV3P2,
                caption: 'Version 3 · Page 2',
            },
            {
                image: deathOfImaginationV2P1,
                caption: 'Version 2 · Page 1',
            },
            {
                image: deathOfImaginationV2P2,
                caption: 'Version 2 · Page 2',
            },
            {
                image: deathOfImaginationV1P1,
                caption: 'Version 1 · Page 1',
            },
            {
                image: deathOfImaginationV1P2,
                caption: 'Version 1 · Page 2',
            },
        ],
    },
    {
        slug: 'the-thing-that-feeds',
        title: 'The Thing That Feeds',
        year: '2025',
        category: 'illustration',
        mediaType: 'image',
        featured: true,
        size: 'landscape',
        image: thingThatFeeds1,
        youtubeId: null,
        galleryIntro: 'Drawn with white pencil on black paper.',
        gallery: [
            {
                image: thingThatFeeds1,
                caption: `It began so soft, so small.
A whisper, a murmur, a faint, fluttering thing.

A creature of no weight, no shadow, no harm.
Or so I thought.`,
            },
            {
                image: thingThatFeeds2,
                caption: `It chirped, it called, “Feed me.”
It said,
“Feed me.”

And I gave it what it sought.
A crumb, a scrap, a morsel of pain.
And oh, how sweet it seemed!`,
            },
            {
                image: thingThatFeeds3,
                caption: `But the thing that grows, grows greedy.
The thing that feeds, feeds more.
It widened its beak, sharp as blade.

Its song turned to a cry,
to a wail,
to a scream.`,
            },
            {
                image: thingThatFeeds4,
                caption: `“Feed me!”
It said,
“Feed me!”
And so I did.

I fed it fear, I fed it sorrow,
I fed it wounds that bled with marrow.
And oh, how it feasted,
how it grew!`,
            },
            {
                image: thingThatFeeds5,
                caption: `“Feed me!”
It says,
And I cannot resist,
“Feed me!”
It says,
And I cannot deny.

For every morsel I give, it promises peace,
And yet,
And yet.`,
            },
            {
                image: thingThatFeeds6,
                caption: `The thing grows,
And I shrink.
The thing feeds,
And I wither.
Its hunger becomes my own.
Its cry, my voice,
Its claws, my hands.

And still it says
“Feed me.”
And still I do.`,
            },
        ],
    },
    {
        slug: 'selfportrait',
        title: 'Selfportrait',
        year: '2025',
        category: 'illustration',
        mediaType: 'image',
        featured: false,
        size: 'portrait',
        image: selfPortrait,
        youtubeId: null,
        gallery: [],
    },
];

export default projects;
