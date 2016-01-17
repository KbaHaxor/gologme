// various settings for the rendering, to be modified by user

// these are all regex patterns and the corresponding mapped title string
// the function mapwin() below will use these to transform the raw window
// titles into common groups. For example, any title mentioning Google Chrome
// may get mapped to just "Google Chrome".
// these get applied in order they are specified, from top to bottom
var title_mappings = [
        //{pattern:/.+/  , mapto:"MISC"},

        {pattern:/Google Chrome/                , mapto:'Internet Browsing'},
        {pattern:/Hangouts/                     , mapto:'Social'},
        {pattern:/^Sarah J Hodde/               , mapto:'Social'},
        {pattern:/^Joanna Chen/                 , mapto:'Social'},
        {pattern:/^Breanna Stryker/             , mapto:'Social'},
        {pattern:/^Eleni Mijalis/               , mapto:'Social'},
        {pattern:/^Grayson Miller/              , mapto:'Social'},
        {pattern:/^Bryce Goodale/               , mapto:'Social'},
        {pattern:/^Buddy List/                  , mapto:'Social'},
        {pattern:/^Cindy Rasche/                , mapto:'Social'},
        {pattern:/^Dale Rasche/                 , mapto:'Social'},

        {pattern:/File Transfers/, mapto: "Desktop"},
        {pattern:/KDE Daemon/, mapto: "Desktop"},
        {pattern:/LibreOffice/, mapto: "Desktop"},
        {pattern:/pinentry/, mapto: "Desktop"},
        {pattern:/Plasma/, mapto: "Desktop"},
        {pattern:/KeePassX/, mapto: "Desktop"},
        {pattern:/Database Locked/, mapto: "Desktop"},
        {pattern:/\.kdb/, mapto: "Desktop"},
        {pattern:/krunner/, mapto: "Desktop"},
        {pattern:/Shutter/, mapto: "Desktop"},
        {pattern:/Screenshot/, mapto: "Desktop"},
        {pattern:/Save As/, mapto: "Desktop"},
        {pattern:/Open Files/, mapto: "Desktop"},
        {pattern:/Find and Replace/, mapto: "Desktop"},

        {pattern:/Firefox/                      , mapto:'Internet Browsing'},
        {pattern:/Thunderbird/, mapto:"Email"},

        {pattern:/documentation.*Google Chrome/ , mapto:'Reading Documentation'},
        {pattern:/docs.*Google Chrome/          , mapto:'Reading Documentation'},

        {pattern:/Write: / , mapto:'Writing'},

        {pattern:/Okular/                       , mapto:'Reading'},
        {pattern:/\.pdf/                        , mapto:'Reading'},
        {pattern:/Kindle Cloud Reader/          , mapto:'Reading'},

        {pattern:/hxr : /                       , mapto:'Terminal'},
        {pattern:/ : vim/                       , mapto:'Coding'},
        {pattern:/Visual Studio Code/           , mapto:'Coding'},
        {pattern:/ : git/                       , mapto:'Terminal'},
        {pattern:/ : bash/                      , mapto:'Terminal'},
        {pattern:/byobu-select/                 , mapto:'Terminal'},
        {pattern:/byobu/                        , mapto:'Terminal'},
        {pattern:/sakura/                       , mapto:'Terminal'},
        {pattern:/@/                            , mapto:'SSH'},
        {pattern:/hxr@leda/                     , mapto:'Terminal'},

        {pattern:/gimp/, mapto: "Graphics"},
        {pattern:/GIMP/, mapto: "Graphics"},
        {pattern:/GNU Image Manipulation Program/, mapto: "Graphics"},
        {pattern:/MeshLab/, mapto: "Graphics"},
        {pattern:/Audacity/, mapto: "Graphics"},
        {pattern:/3D Scan/, mapto: "Graphics"},

        {pattern:/Talos/                        , mapto:"Gaming"},
        {pattern:/TIS-100/                        , mapto:"Gaming"},
        {pattern:/Open Media/                   , mapto:"Entertainment"},
        {pattern:/mplayer2/                     , mapto:"Entertainment"},
        {pattern:/Netflix/                      , mapto:"Entertainment"},
        {pattern:/YouTube/                      , mapto:"Entertainment"},
        {pattern:/VLC/                          , mapto:"Entertainment"},
        {pattern:/Vimeo/                        , mapto:"Entertainment"},
        {pattern:/Imgur/                        , mapto:"Entertainment"},

        {pattern:/Artemis Entry Edit/           , mapto:'Work'},
        {pattern:/ cpt/                         , mapto:'Work'},
        {pattern:/root@[a-f0-9]+/               , mapto:"Work"},
        {pattern:/galaxyproject\//              , mapto:"Work"},
        {pattern:/Galaxy \/ CPT/                , mapto:"Work"},
        {pattern:/CPT\/Galaxy/                  , mapto:"Work"},
        {pattern:/Ontology/                     , mapto:"Work"},
        {pattern:/GFF3/                         , mapto:"Work"},
        {pattern:/IPCC/                         , mapto:"Work"},
        {pattern:/Apollo/                       , mapto:"Work"},
        {pattern:/#galaxyproject/               , mapto:"Work"},
        {pattern:/Add New Post.*Center for Phage/, mapto:"Work/Writing"},
        {pattern:/Edit Post.*Center for Phage/  , mapto:"Work/Writing"},
        {pattern:/GMOD/                         , mapto:"Work"},
        {pattern:/Genome/                       , mapto:"Work"},
        {pattern:/Alignment/                    , mapto:"Work"},
        {pattern:/Annotator/                    , mapto:"Work"},
        {pattern:/Galaxy/                       , mapto:"Work"},
        {pattern:/Stack Overflow/               , mapto:"Work"},
        {pattern:/kombu/i                       , mapto:"Work"},
        {pattern:/Docker/i                      , mapto:"Work"},
        {pattern:/@tamu.edu/i                   , mapto:"Work"},
        {pattern:/TAMU/i                        , mapto:"Work"},
        {pattern:/RabbitMQ/i                    , mapto:"Work"},
        {pattern:/Illumina/i                    , mapto:"Work"},
        {pattern:/Sequencing/i                  , mapto:"Work"},
        {pattern:/Bioinformatics/i              , mapto:"Work"},
        {pattern:/prediction/i                  , mapto:"Work"},
        {pattern:/rost\s*lab/i                  , mapto:"Work"},
        {pattern:/python/i                      , mapto:"Work"},
        {pattern:/Wireshark/i                   , mapto:"Work"},
        {pattern:/Follow TCP Stream/i           , mapto:"Work"},
        {pattern:/ erasche\//                   , mapto:"Work"},
        {pattern:/JBrowse/i                     , mapto:"Work"},
        {pattern:/GBrowse/i                     , mapto:"Work"},
        {pattern:/gene model/i                  , mapto:"Work"},

        {pattern:/BICH\s*464/i                     , mapto:"Work/Teaching"},

        {pattern:/\[galaxy-dev\]/               , mapto:"Work"},
        {pattern:/\[galaxy-committers\]/        , mapto:"Work"},
        {pattern:/dr\. young/i                  , mapto:"Work"},
        {pattern:/NetBeans/                     , mapto:"Work"},
        {pattern:/GWT Development/              , mapto:"Work"},
        {pattern:/galaxy-lib/                   , mapto:"Work"},
        {pattern:/DbDesigner/                   , mapto:"Work"},
        {pattern:/Django/                       , mapto:"Work"},
        {pattern:/Digital Ocean/                , mapto:"Work"},
        {pattern:/JSFiddle/i                    , mapto:"Work"},
        {pattern:/Workflow Home/i               , mapto:"Work"},
        {pattern:/\/ CPT/i                      , mapto:"Work"},
        {pattern:/\[Jenkins\]/i                 , mapto:"Work"},
        {pattern:/Protein/i                     , mapto:"Work"},
        {pattern:/gist:/                        , mapto:"Work"},
        {pattern:/Travis CI/                    , mapto:"Work"},
        {pattern:/biopython/                    , mapto:"Work"},
        {pattern:/Stack Exchange/               , mapto:"Work"},
        {pattern:/Server Fault/                 , mapto:"Work"},
        {pattern:/GalaxyScientists Slack/       , mapto:"Work/Comms"},
        {pattern:/OpenSci Slack/                , mapto:"Work/Comms"},
        {pattern:/Texas A&M University/         , mapto:"Work/Comms"},
        {pattern:/\[tools-iuc\].*Thunderbird/   , mapto:"Work/Comms"},
        {pattern:/\[galaxy-dev\].*Thunderbird/  , mapto:"Work/Comms"},

        {pattern:/__LOCKEDSCREEN/, mapto: "Locked Screen"},

];

// be very careful with ordering in the above because titles
// get matched from up to down (see mapwin()), so put the more specific
// window title rules on the bottom and more generic ones on top

/*
This function takes a raw window title w as string
and outputs a more compact code, to be treated as a single
unit during rendering. Every single possibility output from
this function will have its own row and its own analysis
*/
function mapwin(w) {
  var n = title_mappings.length;
  var mapped_title = 'MISC';
  for(var i=0;i<n;i++) {
    var patmap = title_mappings[i];
    if(patmap.pattern.test(w)) {
      mapped_title = patmap.mapto;
    }
  }
  if(mapped_title === 'MISC'){
      console.log(w + ' :: ' + mapped_title)
  }
  return mapped_title;
}

// These groups will be rendered together in the "barcode view". For example, I like
// to group my work stuff and play stuff together.
var display_groups = [
    ["Internet Browsing", "Email", "Desktop", "Writing"], // generic browsing
    ["Entertainment", "Social", "Reading", "Gaming"], // fun?
    ["Misc Terminal", "Reading Documentation", "Terminal", "Coding", "SSH", "Work", "Work/Comms", "Work/Writing", "Work/Teaching"], // work related
    ["Locked Screen", "MISC"],
];

// list of titles that classify as "hacking", or being productive in general
// the main goal of the day is to get a lot of focused sessions of hacking
// done throughout the day. Windows that arent in this list do not
// classify as hacking, and they break "streaks" (events of focused hacking)
// the implementation is currently quite hacky, experimental and contains
// many magic numbers.
var hacking_titles = ["Terminal", "Coding", "Reading Documentation", "SSH", "Work"];
var draw_hacking = true; // by default turning this off

// draw notes row?
var draw_notes = true;

// experimental coffee levels indicator :)
// looks for notes that mention coffee and shows
// levels of coffee in body over time
var draw_coffee = true;
