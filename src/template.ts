import * as Color from 'color';

const RED = 1;
const RED_ALT = 9;

const BLACK = 7;
const BLACK_ALT = 8;

const GREEN = 10;
const GREEN_ALT = 2;

const YELLOW = 11;
const YELLOW_ALT = 3;

const BLUE = 12;
const BLUE_ALT = 4;

const MAGENTA = 13;
const MAGENTA_ALT = 5;

const CYAN = 14;
const CYAN_ALT = 6;

const WHITE = 15;
const BACKGROUND = 0;

export default (colors: Color[], bordered: boolean) => ({
  'type': 'dark',
  'colors': {
    // Colour reference https://code.visualstudio.com/docs/getstarted/theme-color-reference

    // CONTRAST COLOURS
    // --
    
    // BASE COLOURS
    'focusBorder': colors[BLACK_ALT].hex()+'77',
    'foreground': colors[BLACK].hex()+'99',
    'widget.shadow': colors[BACKGROUND].darken(0.25).hex(),
    'selection.background': colors[BLACK].hex()+'77',
    
    // TEXT COLOURS
    'textBlockQuote.background': colors[BACKGROUND].lighten(0.20).hex(),
    'textLink.foreground': colors[RED].hex(),
    'textLink.activeForeground': colors[RED].hex(),
    'textPreformat.foreground': colors[BLACK].hex(),
    
    // BUTTON CONTROL
    'button.background': colors[RED].hex(),
    'button.foreground': colors[BACKGROUND].hex(),
    //'button.hoverBackground': '',
    
    // DROPDOWN CONTROL
    'dropdown.background': colors[BACKGROUND].lighten(0.20).hex(),
    'dropdown.foreground': colors[BLACK].hex()+'99',
    'dropdown.border': colors[BLACK_ALT].hex()+'77',
    
    // INPUT CONTROL
    'input.background': colors[BACKGROUND].lighten(0.20).hex(),
    'input.border': colors[BLACK_ALT].hex()+'55',
    'input.foreground': colors[BLACK].hex(),
    'input.placeholderForeground': colors[BLACK_ALT].hex()+'77',
    'inputOption.activeBorder': colors[RED].hex(),
    'inputValidation.errorBackground': colors[BACKGROUND].hex(),
    'inputValidation.errorBorder': colors[BLUE_ALT].hex(),
    'inputValidation.infoBackground': colors[BACKGROUND].hex(),
    'inputValidation.infoBorder': colors[GREEN_ALT].hex(),
    'inputValidation.warningBackground': colors[BACKGROUND].hex(),
    'inputValidation.warningBorder': colors[CYAN_ALT].hex(),

    // SCROLLBAR CONTROL
    'scrollbar.shadow': colors[BLACK_ALT].hex()+'33',
    'scrollbarSlider.background': colors[BLACK].hex()+'44',
    'scrollbarSlider.hoverBackground': colors[BLACK].hex()+'77',
    'scrollbarSlider.activeBackground': colors[BLACK].hex()+'92',
    
    // BADGE
    'badge.background': colors[RED].hex(),
    'badge.foreground': colors[BACKGROUND].hex(),
    
    // PROGRESS BAR
    'progressBar.background': colors[RED].hex(),
    
    // LISTS AND TREES
    'list.activeSelectionBackground': colors[BLACK_ALT].hex()+'33',
    'list.activeSelectionForeground': colors[BLACK].hex(),
    'list.focusBackground': colors[BLACK_ALT].hex()+'33',
    'list.focusForeground': colors[BLACK].hex()+'99',
    'list.highlightForeground': colors[RED].hex(),
    'list.hoverBackground': colors[BLACK_ALT].hex()+'33',
    'list.hoverForeground': colors[BLACK].hex()+'99',
    'list.inactiveSelectionBackground': colors[BLACK_ALT].hex()+'33',
    'list.inactiveSelectionForeground': colors[BLACK].hex()+'99',
    'list.invalidItemForeground': colors[BLACK].hex()+'77',
    
    // ACTIVITY BAR
    'activityBar.background': colors[BACKGROUND].hex(),
    'activityBar.foreground': colors[BLACK_ALT].hex(),
    'activityBar.border': bordered ? colors[BLACK_ALT].hex()+'33' : colors[BACKGROUND].hex(),
    'activityBarBadge.background': colors[RED].hex(),
    'activityBarBadge.foreground': colors[BACKGROUND].hex(),
    
    // SIDE BAR
    'sideBar.background': colors[BACKGROUND].hex(),
    'sideBar.border': bordered ? colors[BLACK_ALT].hex()+'33' : colors[BACKGROUND].hex(),
    'sideBarTitle.foreground': colors[BLACK].hex()+'99',
    'sideBarSectionHeader.background': colors[BACKGROUND].hex(),
    'sideBarSectionHeader.foreground': colors[BLACK].hex()+'99',
    
    // EDITOR GROUPS & TABS
    'editorGroup.border': colors[BLACK_ALT].hex()+'33',
    //'editorGroup.background': colors[BACKGROUND].lighten(0.20).hex(), // deprecated
    'editorGroupHeader.noTabsBackground': colors[BACKGROUND].hex(),
    'editorGroupHeader.tabsBackground': colors[BACKGROUND].hex(),
    'editorGroupHeader.tabsBorder': bordered ? colors[BLACK_ALT].hex()+'33' : colors[BACKGROUND].hex(),
    'tab.activeBackground': bordered ? colors[BACKGROUND].lighten(0.20).hex() : colors[BACKGROUND].hex(),
    'tab.activeForeground': colors[BLACK].hex(),
    'tab.border': bordered ? colors[BLACK_ALT].hex()+'33' : colors[BACKGROUND].hex(),
    'tab.activeBorder': bordered ? undefined : colors[RED].hex(),
    'tab.activeBorderTop': bordered ? colors[RED].hex() : undefined,
    'tab.unfocusedActiveBorder': bordered ? undefined : colors[BLACK].hex()+'99',
    'tab.unfocusedActiveBorderTop': bordered ? colors[BLACK].hex()+'99' : undefined,
    'tab.inactiveBackground': colors[BACKGROUND].hex(),
    'tab.inactiveForeground': colors[BLACK].hex()+'99',
    'tab.unfocusedActiveForeground': colors[BLACK].hex()+'99',
    'tab.unfocusedInactiveForeground': colors[BLACK].hex()+'99',
    
    // EDITOR
    'editor.background': bordered ? colors[BACKGROUND].lighten(0.20).hex() : colors[BACKGROUND].hex(),
    'editor.foreground': colors[BLACK].hex(),
    'editorLineNumber.foreground': colors[BLACK_ALT].hex()+'92',
    'editorLineNumber.activeForeground': colors[BLACK_ALT].hex(),
    'editorCursor.foreground': colors[RED].hex(),
    
    'editor.selectionBackground': colors[BLACK_ALT].hex()+'77',
    'editor.inactiveSelectionBackground': colors[BLACK_ALT].hex()+'44',
    'editor.selectionHighlightBackground': colors[BLACK_ALT].hex()+'44',
    'editor.selectionHighlightBorder': colors[BLACK_ALT].hex(),
    
    'editor.wordHighlightBackground': colors[BLACK_ALT].hex()+'44',
    'editor.wordHighlightStrongBackground': colors[GREEN_ALT].hex()+'77',
    
    'editor.findMatchBackground': colors[RED].hex()+'0e',
    'editor.findMatchBorder': colors[RED].hex(),
    'editor.findMatchHighlightBackground': colors[RED].hex()+'0e',
    'editor.findMatchHighlightBorder': colors[RED].hex()+'66',
    'editor.findRangeHighlightBackground': colors[BLACK_ALT].hex()+'44',
    'editor.findRangeHighlightBorder': colors[BACKGROUND].hex()+'00',

    // 'editor.hoverHighlightBackground': '',

    'editor.lineHighlightBackground': colors[BLACK].hex()+'22',
    // 'editor.lineHighlightBorder': '',
    
    'editorLink.activeForeground': colors[RED].hex(),
    
    'editor.rangeHighlightBackground': colors[BLACK_ALT].hex()+'33',
    
    'editorWhitespace.foreground': colors[BLACK_ALT].hex()+'66',

    'editorIndentGuide.background': colors[BLACK_ALT].hex()+'44',
    'editorIndentGuide.activeBackground': colors[BLACK_ALT].hex()+'77',
    
    'editorRuler.foreground': colors[BLACK_ALT].hex()+'44',
    'editorCodeLens.foreground': colors[BLACK_ALT].hex()+'b0',
    
    'editorBracketMatch.background': colors[BLACK_ALT].hex()+'33',
    'editorBracketMatch.border': colors[BLACK_ALT].hex()+'55',
    
    // OVERVIEW RULER
    'editorOverviewRuler.border': colors[BLACK_ALT].hex()+'33',
    'editorOverviewRuler.modifiedForeground': colors[CYAN_ALT].hex()+'bb',
    'editorOverviewRuler.addedForeground': colors[GREEN_ALT].hex()+'bb',
    'editorOverviewRuler.deletedForeground': colors[BLUE_ALT].hex()+'bb',
    'editorOverviewRuler.errorForeground': colors[BLUE_ALT].hex(),
    'editorOverviewRuler.warningForeground': colors[RED].hex(),
    
    // ERRORS AND WARNINGS
    'editorError.foreground': colors[BLUE_ALT].hex(),
    'editorWarning.foreground': colors[RED].hex(),
    
    // GUTTER
    'editorGutter.modifiedBackground': colors[CYAN_ALT].hex()+'bb',
    'editorGutter.addedBackground': colors[GREEN_ALT].hex()+'bb',
    'editorGutter.deletedBackground': colors[BLUE_ALT].hex()+'bb',
    
    // DIFF EDITOR
    'diffEditor.insertedTextBackground': colors[GREEN].hex()+'33',
    'diffEditor.removedTextBackground': colors[CYAN_ALT].hex()+'33',

    // EDITOR WIDGET
    'editorWidget.background': colors[BACKGROUND].lighten(0.20).hex(),
    'editorSuggestWidget.background': colors[BACKGROUND].lighten(0.20).hex(),
    'editorSuggestWidget.border': colors[BLACK_ALT].hex()+'22',
    'editorSuggestWidget.highlightForeground': colors[RED].hex(),
    'editorSuggestWidget.selectedBackground': colors[BLACK_ALT].hex()+'33',
    'editorHoverWidget.background': colors[BACKGROUND].lighten(0.20).hex(),
    'editorHoverWidget.border': colors[BLACK_ALT].hex()+'22',

    // DEBUG EXCEPTION
    'debugExceptionWidget.border': colors[BLACK_ALT].hex()+'33',
    'debugExceptionWidget.background': colors[BACKGROUND].lighten(0.20).hex(),

    // EDITOR MARKER
    'editorMarkerNavigation.background': colors[BACKGROUND].lighten(0.20).hex(),

    // PEEK VIEW
    'peekView.border': colors[BLACK_ALT].hex()+'33',
    'peekViewEditor.background': colors[BACKGROUND].lighten(0.20).hex(),
    'peekViewEditor.matchHighlightBackground': colors[RED].hex()+'44',
    'peekViewResult.background': colors[BACKGROUND].lighten(0.20).hex(),
    'peekViewResult.fileForeground': colors[BLACK].hex()+'99',
    'peekViewResult.matchHighlightBackground': colors[RED].hex()+'44',
    'peekViewTitle.background': colors[BACKGROUND].lighten(0.20).hex(),
    'peekViewTitleDescription.foreground': colors[BLACK].hex()+'99',
    'peekViewTitleLabel.foreground': colors[BLACK].hex()+'99',

    // Merge Conflicts
    // 'merge.currentHeaderBackground': '?',
    // 'merge.currentContentBackground': '?',
    // 'merge.incomingHeaderBackground': '?',
    // 'merge.incomingContentBackground': '?',
    // 'merge.border': '?',
    // 'merge.commonContentBackground': '?',
    // 'merge.commonHeaderBackground': '?',
    // 'editorOverviewRuler.currentContentForeground': '?',
    // 'editorOverviewRuler.incomingContentForeground': '?',
    // 'editorOverviewRuler.commonContentForeground': '?',

    // Panel
    'panel.background': colors[BACKGROUND].hex(),
    'panel.border': colors[BLACK_ALT].hex()+'33',
    'panelTitle.activeBorder': colors[RED].hex(),
    'panelTitle.activeForeground': colors[BLACK].hex(),
    'panelTitle.inactiveForeground': colors[BLACK].hex()+'99',

    // STATUS BAR
    'statusBar.background': colors[BACKGROUND].hex(),
    'statusBar.foreground': colors[BLACK].hex(),
    'statusBar.border': bordered ? colors[BLACK_ALT].hex()+'33' : colors[BACKGROUND].hex(),
    'statusBar.debuggingBackground': colors[CYAN_ALT].hex(),
    'statusBar.debuggingForeground': colors[BACKGROUND].hex()+'dd',
    'statusBar.noFolderBackground': colors[BACKGROUND].lighten(0.20).hex(),
    'statusBarItem.activeBackground': '#00000050',
    'statusBarItem.hoverBackground': '#00000030',
    'statusBarItem.prominentBackground': colors[BLACK_ALT].hex()+'33',
    'statusBarItem.prominentHoverBackground': '#00000030',
    
    // TITLE BAR
    'titleBar.activeBackground': colors[BACKGROUND].hex(),
    'titleBar.activeForeground': colors[BLACK].hex(),
    'titleBar.inactiveBackground': colors[BACKGROUND].hex(),
    'titleBar.inactiveForeground': colors[BLACK].hex(),
    'titleBar.border': bordered ? colors[BLACK_ALT].hex()+'33' : colors[BACKGROUND].hex(),
    
    // MENU BAR
    // 'menubar.selectionForeground': '?',
    // 'menubar.selectionBackground': '?',
    // 'menubar.selectionBorder': '?',
    // 'menu.foreground': '?',
    // 'menu.background': '?',
    // 'menu.selectionForeground': '?',
    // 'menu.selectionBackground': '?',
    // 'menu.selectionBorder': '?',
    
    // NOTIFICATION
    // 'notificationCenter.border': '?',
    // 'notificationCenterHeader.foreground': '?',
    // 'notificationCenterHeader.background': '?',
    // 'notificationToast.border': '?',
    // 'notifications.foreground': '?',
    // 'notifications.background': '?',
    // 'notifications.border': '?',
    // 'notificationLink.foreground': '?',
    
    // EXTENSIONS
    'extensionButton.prominentForeground': colors[BACKGROUND].hex(),
    'extensionButton.prominentBackground': colors[RED].hex(),
    'extensionButton.prominentHoverBackground': colors[RED].hex()+'b3',
    
    // QUICK PICKER
    'pickerGroup.border': colors[BLACK_ALT].hex()+'33',
    'pickerGroup.foreground': colors[BLACK].hex()+'b3',
    
    // DEBUG
    'debugToolBar.background': colors[BACKGROUND].hex(),
    // 'debugToolBar.border': '',
    
    // WELCOME PAGE
    // 'welcomePage.buttonBackground': '?'
    // 'welcomePage.buttonHoverBackground': '?'
    'walkThrough.embeddedEditorBackground': colors[BACKGROUND].lighten(0.20).hex(),
    
    // GIT
    'gitDecoration.modifiedResourceForeground': colors[CYAN_ALT].hex()+'cc',
    'gitDecoration.deletedResourceForeground': colors[BLUE_ALT].hex()+'cc',
    'gitDecoration.untrackedResourceForeground': colors[GREEN_ALT].hex()+'cc',
    'gitDecoration.ignoredResourceForeground': colors[BLACK].hex()+'66',
    // 'gitDecoration.conflictingResourceForeground': '?',
    'gitDecoration.submoduleResourceForeground': colors[MAGENTA].hex()+'b0',

    // Settings
    'settings.headerForeground': colors[BLACK].hex(),
    'settings.modifiedItemIndicator': colors[GREEN_ALT].hex(),

    // TERMINAL
    'terminal.background': colors[BACKGROUND].hex(),
    'terminal.foreground': colors[BLACK].hex(),
    'terminal.ansiBlack': colors[BACKGROUND].hex(),


    'terminal.ansiRed': colors[RED].hex(),
    'terminal.ansiGreen': colors[GREEN_ALT].hex(),
    'terminal.ansiYellow': colors[CYAN_ALT].hex(),
    'terminal.ansiBlue': colors[BLUE_ALT].hex(),
    'terminal.ansiMagenta': colors[MAGENTA_ALT].hex(),
    'terminal.ansiCyan': colors[CYAN_ALT].hex(),
    'terminal.ansiWhite': colors[BLACK].hex(),
    'terminal.ansiBrightBlack': colors[BLACK_ALT].hex(),
    'terminal.ansiBrightRed': colors[RED_ALT].hex(),
    'terminal.ansiBrightGreen': colors[GREEN].hex(),
    'terminal.ansiBrightYellow': colors[CYAN].hex(),
    'terminal.ansiBrightBlue': colors[BLUE].hex(),
    'terminal.ansiBrightMagenta': colors[MAGENTA].hex(),
    'terminal.ansiBrightCyan': colors[CYAN].hex(),
    'terminal.ansiBrightWhite': colors[WHITE].hex()
  },
  'tokenColors': [
    {
      'settings': {
        'background': colors[BACKGROUND].hex(),
        'foreground': colors[BLACK].hex()
      }
    },
    {
      'name': 'Comment',
      'scope': ['comment'],
      'settings': {
        'fontStyle': 'italic',
        'foreground': colors[BLACK_ALT].hex()+'b0'
      }
    },
    
    
    {
      'name': 'String',
      'scope': ['string', 'constant.other.symbol'],
      'settings': {
        'foreground': colors[GREEN].hex()
      }
    },
    {
      'name': 'Regular Expressions and Escape Characters',
      'scope': ['string.regexp', 'constant.character', 'constant.other'],
      'settings': {
        'foreground': colors[CYAN].hex()
      }
    },
    
    
    {
      'name': 'Number',
      'scope': ['constant.numeric'],
      'settings': {
        'foreground': colors[RED].hex()
      }
    },
    {
      'name': 'Built-in constants',
      'scope': ['constant.language'],
      'settings': {
        'foreground': colors[RED].hex()
      }
    },
    
    
    {
      'name': 'Variable',
      'scope': ['variable'],
      'settings': {
        'foreground': colors[BLACK].hex()
      }
    },
    {
      'name': 'Member Variable',
      'scope': ['variable.member'],
      'settings': {
        'foreground': colors[RED].hex()
      }
    },
    {
      'name': 'Language variable',
      'scope': ['variable.language'],
      'settings': {
        'fontStyle': 'italic',
        'foreground': colors[GREEN_ALT].hex()
      }
    },
    
    
    // ------
    // Keywords
    {
      'name': 'Storage',
      'scope': ['storage'],
      'settings': {
        'foreground': colors[CYAN].hex()
      }
    },
    {
      'name': 'Keyword',
      'scope': ['keyword'],
      'settings': {
        'foreground': colors[CYAN].hex()
      }
    },
    
    
    // ------
    // Operators
    {
      'name': 'Operators',
      'scope': ['keyword.operator'],
      'settings': {
        'foreground': colors[CYAN_ALT].hex()
      }
    },


   // ------
   // Punctuation
   {
     'name': 'Separators like ; or ,',
     'scope': ['punctuation.separator', 'punctuation.terminator'],
     'settings': {
       'foreground': colors[BLACK].hex()+'b0'
      }
    },
    {
      'name': 'Punctuation',
      'scope': ['punctuation.section'],
      'settings': {
        'foreground': colors[BLACK].hex()
      }
    },
    {
      'name': 'Accessor',
      'scope': ['punctuation.accessor'],
      'settings': {
        'foreground': colors[CYAN_ALT].hex()
      }
    },
    
    
    // ------
    // Types
    {
      'name': 'Types fixes',
      'scope': [
        'source.java storage.type',
        'source.haskell storage.type',
        'source.c storage.type',
      ],
      'settings': {
        'foreground': colors[BLUE].hex()
      }
    },
    {
      'name': 'Inherited class type',
      'scope': ['entity.other.inherited-class'],
      'settings': {
        'foreground': colors[GREEN_ALT].hex()
      }
    },
    // Fixes
    {
      'name': 'Lambda arrow',
      'scope': ['storage.type.function'],
      'settings': {
        'foreground': colors[CYAN].hex()
      }
    },
    {
      'name': 'Java primitive variable types',
      'scope': ['source.java storage.type.primitive'],
      'settings': {
        'foreground': colors[GREEN_ALT].hex()
      }
    },
    
    
    // ------
    // Function/method names in definitions
    // and calls
    {
      'name': 'Function name',
      'scope': ['entity.name.function'],
      'settings': {
        'foreground': colors[CYAN].hex()
      }
    },
    {
      'name': 'Function arguments',
      'scope': ['variable.parameter', 'meta.parameter'],
      'settings': {
        'foreground': colors[MAGENTA].hex()
      }
    },
    {
      'name': 'Function call',
      'scope': [
        'variable.function',
        'variable.annotation',
        'meta.function-call.generic',
        'support.function.go'
      ],
      'settings': {
        'foreground': colors[CYAN].hex()
      }
    },
    {
      'name': 'Library function',
      'scope': ['support.function', 'support.macro'],
      'settings': {
        'foreground': colors[RED].hex()
      }
    },
    
    
    // ------
    // Import/export paths
    {
      'name': 'Imports and packages',
      'scope': ['entity.name.import', 'entity.name.package'],
      'settings': {
        'foreground': colors[GREEN].hex()
      }
    },
    {
      'name': 'Entity name',
      'scope': ['entity.name'],
      'settings': {
        'foreground': colors[BLUE].hex()
      }
    },
    
    // Tag and their attributes
    {
      'name': 'Tag',
      'scope': ['entity.name.tag', 'meta.tag.sgml'],
      'settings': {
        'foreground': colors[GREEN_ALT].hex()
      }
    },
    {
      'name': 'Tag start/end',
      'scope': [
        'punctuation.definition.tag.end',
        'punctuation.definition.tag.begin',
        'punctuation.definition.tag'
      ],
      'settings': {
        'foreground': colors[GREEN_ALT].hex()+'77'
      }
    },
    {
      'name': 'Tag attribute',
      'scope': ['entity.other.attribute-name'],
      'settings': {
        'foreground': colors[CYAN].hex()
      }
    },
    
    
    {
      'name': 'Library constant',
      'scope': ['support.constant'],
      'settings': {
        'fontStyle': 'italic',
        'foreground': colors[CYAN_ALT].hex()
      }
    },
    {
      'name': 'Library class/type',
      'scope': ['support.type', 'support.class', 'source.go storage.type'],
      'settings': {
        'foreground': colors[GREEN_ALT].hex()
      }
    },
    {
      'name': 'Decorators/annotation',
      'scope': [
        'meta.decorator variable.other',
        'meta.decorator punctuation.decorator',
        'storage.type.annotation'
      ],
      'settings': {
        'foreground': colors[MAGENTA].hex()
      }
    },
    {
      'name': 'Invalid',
      'scope': ['invalid'],
      'settings': {
        'foreground': colors[BLUE_ALT].hex()
      }
    },
    {
      'name': 'diff.header',
      'scope': ['meta.diff', 'meta.diff.header'],
      'settings': {
        'foreground': colors[MAGENTA].hex()
      }
    },
    {
      'name': 'Ruby class methods',
      'scope': ['source.ruby variable.other.readwrite'],
      'settings': {
        'foreground': colors[CYAN].hex()
      }
    },
    {
      'name': 'CSS tag names',
      'scope': [
        'source.css entity.name.tag',
        'source.sass entity.name.tag',
        'source.scss entity.name.tag',
        'source.less entity.name.tag',
        'source.stylus entity.name.tag'
      ],
      'settings': {
        'foreground': colors[BLUE].hex()
      }
    },
    {
      'name': 'CSS browser prefix',
      'scope': [
        'source.css support.type',
        'source.sass support.type',
        'source.scss support.type',
        'source.less support.type',
        'source.stylus support.type'
      ],
      'settings': {
        'foreground': colors[BLACK_ALT].hex()+'b0'
      }
    },
    {
      'name': 'CSS Properties',
      'scope': ['support.type.property-name'],
      'settings': {
        'fontStyle': 'normal',
        'foreground': colors[GREEN_ALT].hex()
      }
    },
    {
      'name': 'Search Results Nums',
      'scope': ['constant.numeric.line-number.find-in-files - match'],
      'settings': {
        'foreground': colors[BLACK_ALT].hex()+'b0'
      }
    },
    {
      'name': 'Search Results Match Nums',
      'scope': ['constant.numeric.line-number.match'],
      'settings': {
        'foreground': colors[CYAN].hex()
      }
    },
    {
      'name': 'Search Results Lines',
      'scope': ['entity.name.filename.find-in-files'],
      'settings': {
        'foreground': colors[GREEN].hex()
      }
    },
    {
      'scope': ['message.error'],
      'settings': {
        'foreground': colors[BLUE_ALT].hex()
      }
    },
    {
      'name': 'Markup heading',
      'scope': ['markup.heading', 'markup.heading entity.name'],
      'settings': {
        'fontStyle': 'bold',
        'foreground': colors[GREEN].hex()
      }
    },
    {
      'name': 'Markup links',
      'scope': ['markup.underline.link', 'string.other.link'],
      'settings': {
        'foreground': colors[GREEN_ALT].hex()
      }
    },
    {
      'name': 'Markup Italic',
      'scope': ['markup.italic'],
      'settings': {
        'fontStyle': 'italic',
        'foreground': colors[RED].hex()
      }
    },
    {
      'name': 'Markup Bold',
      'scope': ['markup.bold'],
      'settings': {
        'fontStyle': 'bold',
        'foreground': colors[RED].hex()
      }
    },
    {
      'name': 'Markup Bold/italic',
      'scope': ['markup.italic markup.bold', 'markup.bold markup.italic'],
      'settings': {
        'fontStyle': 'bold italic'
      }
    },
   {
     'name': 'Markup Code',
     'scope': ['markup.raw'],
     'settings': {
       'background': colors[BLACK].hex()+'06'
      }
    },
    {
      'name': 'Markup Code Inline',
      'scope': ['markup.raw.inline'],
      'settings': {
        'background': colors[BLACK].hex()+'10'
      }
    },
    {
      'name': 'Markdown Separator',
      'scope': ['meta.separator'],
      'settings': {
        'fontStyle': 'bold',
        'background': colors[BLACK].hex()+'10',
        'foreground': colors[BLACK_ALT].hex()+'b0'
      }
    },
    {
      'name': 'Markup Blockquote',
      'scope': ['markup.quote'],
      'settings': {
        'foreground': colors[CYAN].hex(),
        'fontStyle': 'italic'
      }
    },
    {
      'name': 'Markup List Bullet',
      'scope': ['markup.list punctuation.definition.list.begin'],
      'settings': {
        'foreground': colors[CYAN].hex()
      }
    },
    {
     'name': 'Markup added',
     'scope': ['markup.inserted'],
     'settings': {
       'foreground': colors[GREEN_ALT].hex()
      }
    },
    {
      'name': 'Markup modified',
      'scope': ['markup.changed'],
      'settings': {
        'foreground': colors[CYAN_ALT].hex()
      }
    },
    {
      'name': 'Markup removed',
      'scope': ['markup.deleted'],
      'settings': {
        'foreground': colors[BLUE_ALT].hex()
      }
    },
    {
      'name': 'Markup Strike',
      'scope': ['markup.strike'],
      'settings': {
        'foreground': colors[MAGENTA].hex()
      }
    },
    {
     'name': 'Markup Table',
     'scope': ['markup.table'],
     'settings': {
       'background': colors[BLACK].hex()+'10',
       'foreground': colors[GREEN_ALT].hex()
      }
    },
    {
      'name': 'Markup Raw Inline',
      'scope': ['text.html.markdown markup.inline.raw'],
      'settings': {
        'foreground': colors[CYAN_ALT].hex()
      }
    },
    {
      'name': 'Markdown - Line Break',
      'scope': ['text.html.markdown meta.dummy.line-break'],
      'settings': {
        'background': colors[BLACK_ALT].hex()+'b0',
        'foreground': colors[BLACK_ALT].hex()+'b0'
      }
    },
    {
      'name': 'Markdown - Raw Block Fenced',
      'scope': ['punctuation.definition.markdown'],
      'settings': {
        'background': colors[BLACK].hex(),
        'foreground': colors[BLACK_ALT].hex()+'b0'
      }
    }
  ]
});
