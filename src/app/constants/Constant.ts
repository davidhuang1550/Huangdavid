/**
 * Constant class used to configure the output quotes on the first page of the website.
 */
import {WorkExperience} from '../model/WorkExperience';
import {Experience} from '../model/Experience';

export class Constant {
  /**
   *  traits that are associated with the qoutes
   */
  public static readonly TRAITS: string[] = [
            'Innovator',
            'Dedicated',
            'Versatile',
            'Efficient',
            'Team Player'];
  /**
   * qoutes
   */
  public static readonly QUOTES: string[] = [
            '“The rise of Google, the rise of Facebook, the rise of Apple,\n'
            + 'I think are proof that there is a place for computer science as\n'
            + 'something that solves problems that people face every day.” - Eric Schmidt',

            '“Computer science is no more about computers than astronomy is about telescopes.” - Edsger Dijkstra',

            '“The question of whether a computer can think is no more interesting\n'
            + 'than the question of whether a submarine can swim.”- Edsger Dijkstra',

            '“What\'s in your hands I think and hope is intelligence: the ability to see '
            + 'the machine as more than when you were ﬁrst led up to it that you can make it more.”― Alan J. Perlis',

            '“Any fool can write code that a computer can understand. Good programmers write '
            + 'code that humans can understand.” – Martin Fowler'
          ];
  /**
   * the interval rate at which the traits and qoutes are rotated between each other.
   */
  public static readonly INTERVAL_MILLISECONDS = 5000;

  public static readonly ABOUT_SECTION_ONE = 'Hello, my name is David Huang and welcome to my personal website! ' +
                                         'I am an application consultant at CIBC by day and a parttime student by ' +
                                         'night. I am currently a fourth year student study at Seneca College pursuing ' +
                                         'my bachelors in technology.' +
                                         ' Through my experiences in developing/development, both in and outside the ' +
                                         'office environment, I have learned to be a valuable team player, whereby, ' +
                                         'I am always looking for alternative solutions that could result in greater ' +
                                         'success for my team collectively. I constantly push myself to challenge the status ' +
                                         'quo and innovate outside the box, trying to find new and creative ways to conquer my ' +
                                         'obstacles. My passion for computer science has been growing at an exponential ' +
                                         'rate and my desire to learn more has become my drive.\n';
  public static readonly EXPERIENCE: Experience[] = [
    new WorkExperience(
      '2017 May 1st',
      '2017 September 3rd',
      '37 Sandiford Dr Suite 300, Whitchurch-Stouffville, ON L4A 3Z2',
      'Strategic Information Technology(SIT)',
      [
        'Karma Jasmine',
        'Advanced Business Language(ABL)',
        'Angular 1.x',
        'ES6'],
      [
        'Investigated/fixed client bugs using ABL, and regression tested alongside client services.',
        'Unit tested using Karma Jasmine'],
      new Map(
        [
          ['Automated Database script by building',
            ['GUI Interface with options to choose which database table to reset, populate or destroy',
             'CMD capabilities accepting multiple parameters for generating, destroying or resetting database']
          ]
        ]),
      'Junior Developer'
    ),
    new WorkExperience(
      '2018 Janurary 2nd',
      '2018 September 4th',
      '22 Front St W 8th floor, Toronto, ON M5J 1C4',
      'Canadian Imperial Bank of Commerce(CIBC)',
      [
        'Framework: React, Spring, Angular 7',
        'Languages: ES6, Java, Bash, TypeScript, Sql/PlSql, Oracle',
        'Tools / Version Control: Github, Maven, Artifactory, Jenkins, Solace, IBM MQ Websphere'],
      [
        'Created automated reports using internally built framework and tested alongside a BA',
        'Investigated, analyze and fixed framework/production bugs',
        'Optimized poor performing Oracle queries by significantly reducing run time',
        'Supported/Coordinated Production releases',
        'Built admin database configuration tool prototype using react, bootstrap that successfully communicated with a web service.'],
      new Map(),
      'Application Developer'
    ),
    new WorkExperience(
      '2018 September 4th',
      'present',
      '22 Front St W 8th floor, Toronto, ON M5J 1C4',
      'Canadian Imperial Bank of Commerce(CIBC)',
      [],
      [],
      new Map(),
      'Application Consultant'
    )
  ];

  public static readonly NAV_ITEMS: Map<string, string> = new Map([
    ['about' , 'About'],
    ['experience', 'Experience'],
    ['contact', 'Contact' ]
  ]);
}
