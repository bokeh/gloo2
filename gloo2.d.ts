/*
type Mode = "POINTS" | "LINES" | "LINE_LOOP" | "LINE_STRIP" | "LINE_FAN" | "TRIANGLES"

type Wrap = "REPEAT" | "CLAMP_TO_EDGE" | "MIRRORED_REPEAT"

type MinInterp = "LINEAR" | "NEAREST"

type MaxInterp = "LINEAR" | "NEAREST" | "NEAREST_MIPMAP_NEAREST" | "LINEAR_MIPMAP_NEAREST" | "NEAREST_MIPMAP_LINEAR" | "LINEAR_MIPMAP_LINEAR"

type TextureFormat = "LUMINANCE" | "LUMINANCE_ALPHA" | "RGB" | "RGBA"
*/

export declare type GLEnum = number

export declare class GlooObject {
  constructor(gl: WebGLRenderingContext)
}

export declare class Program extends GlooObject {
  delete(): void
  activate(): void
  deactivate(): void
  set_shaders(vert: string, frag: string): void
  set_texture(name: string, value: Texture2D): void
  set_uniform(name: string, type_: string, value: number[]): void
  set_attribute(name: string, type_: string, value: VertexBuffer | number[], stride?: number, offset?: number): void
  draw(mode: GLEnum /*Mode*/, selection: IndexBuffer | [number, number]): void
}

export declare class Buffer extends GlooObject {
  delete(): void
  activate(): void
  deactivate(): void
  set_size(nbytes: number): void
  set_data(offset: number, data: any /* XXX: a typed array */): void
}

export declare class VertexBuffer extends Buffer {}

export declare class IndexBuffer extends Buffer {}

export declare class Texture2D extends GlooObject {
  delete(): void
  activate(): void
  deactivate(): void
  set_wrapping(wrap_s: GLEnum /*Wrap*/, wrap_t: GLEnum /*Wrap*/): void
  set_interpolation(min: GLEnum /*MinInterp*/, max: GLEnum /*MaxInterp*/): void
  set_size(shape: any /*[number, number] */, format: GLEnum /*TextureFormat*/): void
  set_data(offset: any /*[number, number] */, shape: any /*[number, number] */, data: any /* XXX: byte typed array */): void
}

export declare class Texture3DLike extends Texture2D {
  set_size(shape: any /*[number, number, number] */, format: GLEnum /*TextureFormat*/): void
  set_data(offset: any /*[number, number, number] */, shape: any /*[number, number, number] */, data: any /* XXX: byte typed array */): void
}
