// Adapted to React/Typescript by Julian D. Medina JulianDM1995@gmail.com 🚀
// based on the original design patterns from https://heropatterns.com/ 🎨

import { BackgroundPatternName } from '../types'
import { FourPointStars } from './variants/4PointStars'
import { AnchorsAway } from './variants/AnchorsAway'
import { Architect } from './variants/Architect'
import { Autumn } from './variants/Autumn'
import { Aztec } from './variants/Aztec'
import { Bamboo } from './variants/Bamboo'
import { BankNote } from './variants/BankNote'
import { BathroomFloor } from './variants/BathroomFloor'
import { BevelCircle } from './variants/BevelCircle'
import { Boxes } from './variants/Boxes'
import { BrickWall } from './variants/BrickWall'
import { Bubbles } from './variants/Bubbles'
import { Cage } from './variants/Cage'
import { CharlieBrown } from './variants/CharlieBrown'
import { ChurchOnSunday } from './variants/ChurchOnSunday'
import { CirclesAndSquares } from './variants/Circles&Squares'
import { CircuitBoard } from './variants/CircuitBoard'
import { Connections } from './variants/Connections'
import { CorkScrew } from './variants/CorkScrew'
import { Current } from './variants/Current'
import { Curtain } from './variants/Curtain'
import { Cutout } from './variants/Cutout'
import { DeathStar } from './variants/DeathStar'
import { DiagonalLines } from './variants/DiagonalLines'
import { DiagonalStripes } from './variants/DiagonalStripes'
import { Dominos } from './variants/Dominos'
import { EndlessClouds } from './variants/EndlessClouds'
import { Eyes } from './variants/Eyes'
import { FallingTriangles } from './variants/FallingTriangles'
import { FancyRectangles } from './variants/FancyRectangles'
import { FlippedDiamonds } from './variants/FlippedDiamonds'
import { FloatingCogs } from './variants/FloatingCogs'
import { FloorTile } from './variants/FloorTile'
import { FormalInvitation } from './variants/FormalInvitation'
import { Glamorous } from './variants/Glamorous'
import { GraphPaper } from './variants/GraphPaper'
import { Groovy } from './variants/Groovy'
import { HappyIntersection } from './variants/HappyIntersection'
import { HeavyRain } from './variants/HeavyRain'
import { Hexagons } from './variants/Hexagons'
import { Hideout } from './variants/Hideout'
import { Houndstooth } from './variants/Houndstooth'
import { ILikeFood } from './variants/ILikeFood'
import { IntersectingCircles } from './variants/IntersectingCircles'
import { Jigsaw } from './variants/Jigsaw'
import { Jupiter } from './variants/Jupiter'
import { Kiwi } from './variants/Kiwi'
import { Leaf } from './variants/Leaf'
import { LinesInMotion } from './variants/LinesInMotion'
import { Lips } from './variants/Lips'
import { Lisbon } from './variants/Lisbon'
import { Melt } from './variants/Melt'
import { Moroccan } from './variants/Moroccan'
import { MorphingDiamonds } from './variants/MorphingDiamonds'
import { Overcast } from './variants/Overcast'
import { OverlappingCircles } from './variants/OverlappingCircles'
import { OverlappingDiamonds } from './variants/OverlappingDiamonds'
import { OverlappingHexagons } from './variants/OverlappingHexagons'
import { ParkayFloor } from './variants/ParkayFloor'
import { PianoMan } from './variants/PianoMan'
import { PieFactory } from './variants/PieFactory'
import { PixelDots } from './variants/PixelDots'
import { Plus } from './variants/Plus'
import { PolkaDots } from './variants/PolkaDots'
import { Rails } from './variants/Rails'
import { Rain } from './variants/Rain'
import { RandomShapes } from './variants/RandomShapes'
import { RoundedPlusConnected } from './variants/RoundedPlusConnected'
import { Signal } from './variants/Signal'
import { Skulls } from './variants/Skulls'
import { SlantedStars } from './variants/SlantedStars'
import { Squares } from './variants/Squares'
import { SquaresInSquares } from './variants/SquaresInSquares'
import { StampCollection } from './variants/StampCollection'
import { SteelBeams } from './variants/SteelBeams'
import { Stripes } from './variants/Stripes'
import { Temple } from './variants/Temple'
import { Texture } from './variants/Texture'
import { TicTacToe } from './variants/TicTacToe'
import { TinyCheckers } from './variants/TinyCheckers'
import { Topography } from './variants/Topography'
import { VolcanoLamp } from './variants/VolcanoLamp'
import { Wallpaper } from './variants/Wallpaper'
import { Wiggle } from './variants/Wiggle'
import { XEquals } from './variants/XEquals'
import { YYY } from './variants/YYY'
import { ZigZag } from './variants/ZigZag'

export const getBackgroundPattern = (
  pattern: BackgroundPatternName,
  color: string,
  opacity: number
): string => {
  const backgroundPatterns: Record<BackgroundPatternName, string> = {
    jigsaw: Jigsaw(color, opacity),
    overcast: Overcast(color, opacity),
    formalInvitation: FormalInvitation(color, opacity),
    topography: Topography(color, opacity),
    texture: Texture(color, opacity),
    jupiter: Jupiter(color, opacity),
    architect: Architect(color, opacity),
    cutout: Cutout(color, opacity),
    hideout: Hideout(color, opacity),
    graphPaper: GraphPaper(color, opacity),
    yyy: YYY(color, opacity),
    squares: Squares(color, opacity),
    fallingTriangles: FallingTriangles(color, opacity),
    pianoMan: PianoMan(color, opacity),
    pieFactory: PieFactory(color, opacity),
    dominos: Dominos(color, opacity),
    hexagons: Hexagons(color, opacity),
    charlieBrown: CharlieBrown(color, opacity),
    autumn: Autumn(color, opacity),
    temple: Temple(color, opacity),
    stampCollection: StampCollection(color, opacity),
    deathStar: DeathStar(color, opacity),
    churchOnSunday: ChurchOnSunday(color, opacity),
    iLikeFood: ILikeFood(color, opacity),
    overlappingHexagons: OverlappingHexagons(color, opacity),
    fourPointStars: FourPointStars(color, opacity),
    bamboo: Bamboo(color, opacity),
    bathroomFloor: BathroomFloor(color, opacity),
    corkScrew: CorkScrew(color, opacity),
    happyIntersection: HappyIntersection(color, opacity),
    kiwi: Kiwi(color, opacity),
    lips: Lips(color, opacity),
    lisbon: Lisbon(color, opacity),
    randomShapes: RandomShapes(color, opacity),
    steelBeams: SteelBeams(color, opacity),
    tinyCheckers: TinyCheckers(color, opacity),
    xEquals: XEquals(color, opacity),
    anchorsAway: AnchorsAway(color, opacity),
    bevelCircle: BevelCircle(color, opacity),
    brickWall: BrickWall(color, opacity),
    fancyRectangles: FancyRectangles(color, opacity),
    heavyRain: HeavyRain(color, opacity),
    overlappingCircles: OverlappingCircles(color, opacity),
    plus: Plus(color, opacity),
    roundedPlusConnected: RoundedPlusConnected(color, opacity),
    volcanoLamp: VolcanoLamp(color, opacity),
    wiggle: Wiggle(color, opacity),
    bubbles: Bubbles(color, opacity),
    cage: Cage(color, opacity),
    connections: Connections(color, opacity),
    current: Current(color, opacity),
    diagonalStripes: DiagonalStripes(color, opacity),
    flippedDiamonds: FlippedDiamonds(color, opacity),
    floatingCogs: FloatingCogs(color, opacity),
    glamorous: Glamorous(color, opacity),
    houndstooth: Houndstooth(color, opacity),
    leaf: Leaf(color, opacity),
    linesInMotion: LinesInMotion(color, opacity),
    moroccan: Moroccan(color, opacity),
    morphingDiamonds: MorphingDiamonds(color, opacity),
    rails: Rails(color, opacity),
    rain: Rain(color, opacity),
    skulls: Skulls(color, opacity),
    squaresInSquares: SquaresInSquares(color, opacity),
    stripes: Stripes(color, opacity),
    ticTacToe: TicTacToe(color, opacity),
    zigZag: ZigZag(color, opacity),
    aztec: Aztec(color, opacity),
    bankNote: BankNote(color, opacity),
    boxes: Boxes(color, opacity),
    circlesAndSquares: CirclesAndSquares(color, opacity),
    circuitBoard: CircuitBoard(color, opacity),
    curtain: Curtain(color, opacity),
    diagonalLines: DiagonalLines(color, opacity),
    endlessClouds: EndlessClouds(color, opacity),
    eyes: Eyes(color, opacity),
    floorTile: FloorTile(color, opacity),
    groovy: Groovy(color, opacity),
    intersectingCircles: IntersectingCircles(color, opacity),
    melt: Melt(color, opacity),
    overlappingDiamonds: OverlappingDiamonds(color, opacity),
    parkayFloor: ParkayFloor(color, opacity),
    pixelDots: PixelDots(color, opacity),
    polkaDots: PolkaDots(color, opacity),
    signal: Signal(color, opacity),
    slantedStars: SlantedStars(color, opacity),
    wallpaper: Wallpaper(color, opacity),
  }

  return backgroundPatterns[pattern]
}
