
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model MasterTariff
 * 
 */
export type MasterTariff = $Result.DefaultSelection<Prisma.$MasterTariffPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RecordStatus: {
  Active: 'Active',
  Inactive: 'Inactive',
  Delete: 'Delete'
};

export type RecordStatus = (typeof RecordStatus)[keyof typeof RecordStatus]

}

export type RecordStatus = $Enums.RecordStatus

export const RecordStatus: typeof $Enums.RecordStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MasterTariffs
 * const masterTariffs = await prisma.masterTariff.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more MasterTariffs
   * const masterTariffs = await prisma.masterTariff.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.masterTariff`: Exposes CRUD operations for the **MasterTariff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterTariffs
    * const masterTariffs = await prisma.masterTariff.findMany()
    * ```
    */
  get masterTariff(): Prisma.MasterTariffDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    MasterTariff: 'MasterTariff'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "masterTariff"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MasterTariff: {
        payload: Prisma.$MasterTariffPayload<ExtArgs>
        fields: Prisma.MasterTariffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterTariffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTariffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterTariffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTariffPayload>
          }
          findFirst: {
            args: Prisma.MasterTariffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTariffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterTariffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTariffPayload>
          }
          findMany: {
            args: Prisma.MasterTariffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTariffPayload>[]
          }
          create: {
            args: Prisma.MasterTariffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTariffPayload>
          }
          createMany: {
            args: Prisma.MasterTariffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MasterTariffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTariffPayload>
          }
          update: {
            args: Prisma.MasterTariffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTariffPayload>
          }
          deleteMany: {
            args: Prisma.MasterTariffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterTariffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MasterTariffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTariffPayload>
          }
          aggregate: {
            args: Prisma.MasterTariffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasterTariff>
          }
          groupBy: {
            args: Prisma.MasterTariffGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterTariffGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterTariffCountArgs<ExtArgs>
            result: $Utils.Optional<MasterTariffCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    masterTariff?: MasterTariffOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model MasterTariff
   */

  export type AggregateMasterTariff = {
    _count: MasterTariffCountAggregateOutputType | null
    _avg: MasterTariffAvgAggregateOutputType | null
    _sum: MasterTariffSumAggregateOutputType | null
    _min: MasterTariffMinAggregateOutputType | null
    _max: MasterTariffMaxAggregateOutputType | null
  }

  export type MasterTariffAvgAggregateOutputType = {
    Id: number | null
    FirstTariffMobilWeekDay: number | null
    SecondTariffMobilWeekDay: number | null
    MaximalTariffMobilWeekDay: number | null
    FirstTariffMobilWeekEnd: number | null
    SecondTariffMobilWeekEnd: number | null
    MaximalTariffMobilWeekEnd: number | null
    FirstTarrifValetWeekDay: number | null
    SecondTariffValetWeekDay: number | null
    MaximalTariffValetWeekDay: number | null
    FirstTariffValetWeekEnd: number | null
    SecondTariffValetWeekEnd: number | null
    MaximalTariffValetWeekEnd: number | null
    FirstTariffVIPWeekDay: number | null
    SecondTariffVIPWeekDay: number | null
    MaximalTariffVIPWeekDay: number | null
    FirstTariffVIPWeekEnd: number | null
    SecondTariffVIPWeekEnd: number | null
    MaximalTariffVIPWeekEnd: number | null
    FirstTariffMotorWeekDay: number | null
    SecondTariffMotorWeekDay: number | null
    MaximalTariffMotorWeekDay: number | null
    FirstTariffMotorWeekEnd: number | null
    SecondTariffMotorWeekEnd: number | null
    MaximalTariffMotorWeekEnd: number | null
  }

  export type MasterTariffSumAggregateOutputType = {
    Id: number | null
    FirstTariffMobilWeekDay: number | null
    SecondTariffMobilWeekDay: number | null
    MaximalTariffMobilWeekDay: number | null
    FirstTariffMobilWeekEnd: number | null
    SecondTariffMobilWeekEnd: number | null
    MaximalTariffMobilWeekEnd: number | null
    FirstTarrifValetWeekDay: number | null
    SecondTariffValetWeekDay: number | null
    MaximalTariffValetWeekDay: number | null
    FirstTariffValetWeekEnd: number | null
    SecondTariffValetWeekEnd: number | null
    MaximalTariffValetWeekEnd: number | null
    FirstTariffVIPWeekDay: number | null
    SecondTariffVIPWeekDay: number | null
    MaximalTariffVIPWeekDay: number | null
    FirstTariffVIPWeekEnd: number | null
    SecondTariffVIPWeekEnd: number | null
    MaximalTariffVIPWeekEnd: number | null
    FirstTariffMotorWeekDay: number | null
    SecondTariffMotorWeekDay: number | null
    MaximalTariffMotorWeekDay: number | null
    FirstTariffMotorWeekEnd: number | null
    SecondTariffMotorWeekEnd: number | null
    MaximalTariffMotorWeekEnd: number | null
  }

  export type MasterTariffMinAggregateOutputType = {
    Id: number | null
    LocationCode: string | null
    LocationName: string | null
    FirstTariffMobilWeekDay: number | null
    SecondTariffMobilWeekDay: number | null
    MaximalTariffMobilWeekDay: number | null
    FirstTariffMobilWeekEnd: number | null
    SecondTariffMobilWeekEnd: number | null
    MaximalTariffMobilWeekEnd: number | null
    FirstTarrifValetWeekDay: number | null
    SecondTariffValetWeekDay: number | null
    MaximalTariffValetWeekDay: number | null
    FirstTariffValetWeekEnd: number | null
    SecondTariffValetWeekEnd: number | null
    MaximalTariffValetWeekEnd: number | null
    FirstTariffVIPWeekDay: number | null
    SecondTariffVIPWeekDay: number | null
    MaximalTariffVIPWeekDay: number | null
    FirstTariffVIPWeekEnd: number | null
    SecondTariffVIPWeekEnd: number | null
    MaximalTariffVIPWeekEnd: number | null
    FirstTariffMotorWeekDay: number | null
    SecondTariffMotorWeekDay: number | null
    MaximalTariffMotorWeekDay: number | null
    FirstTariffMotorWeekEnd: number | null
    SecondTariffMotorWeekEnd: number | null
    MaximalTariffMotorWeekEnd: number | null
    RecordStatus: $Enums.RecordStatus | null
    CreatedAt: Date | null
    CreatedBy: string | null
    UpdatedAt: Date | null
    UpdatedBy: string | null
  }

  export type MasterTariffMaxAggregateOutputType = {
    Id: number | null
    LocationCode: string | null
    LocationName: string | null
    FirstTariffMobilWeekDay: number | null
    SecondTariffMobilWeekDay: number | null
    MaximalTariffMobilWeekDay: number | null
    FirstTariffMobilWeekEnd: number | null
    SecondTariffMobilWeekEnd: number | null
    MaximalTariffMobilWeekEnd: number | null
    FirstTarrifValetWeekDay: number | null
    SecondTariffValetWeekDay: number | null
    MaximalTariffValetWeekDay: number | null
    FirstTariffValetWeekEnd: number | null
    SecondTariffValetWeekEnd: number | null
    MaximalTariffValetWeekEnd: number | null
    FirstTariffVIPWeekDay: number | null
    SecondTariffVIPWeekDay: number | null
    MaximalTariffVIPWeekDay: number | null
    FirstTariffVIPWeekEnd: number | null
    SecondTariffVIPWeekEnd: number | null
    MaximalTariffVIPWeekEnd: number | null
    FirstTariffMotorWeekDay: number | null
    SecondTariffMotorWeekDay: number | null
    MaximalTariffMotorWeekDay: number | null
    FirstTariffMotorWeekEnd: number | null
    SecondTariffMotorWeekEnd: number | null
    MaximalTariffMotorWeekEnd: number | null
    RecordStatus: $Enums.RecordStatus | null
    CreatedAt: Date | null
    CreatedBy: string | null
    UpdatedAt: Date | null
    UpdatedBy: string | null
  }

  export type MasterTariffCountAggregateOutputType = {
    Id: number
    LocationCode: number
    LocationName: number
    FirstTariffMobilWeekDay: number
    SecondTariffMobilWeekDay: number
    MaximalTariffMobilWeekDay: number
    FirstTariffMobilWeekEnd: number
    SecondTariffMobilWeekEnd: number
    MaximalTariffMobilWeekEnd: number
    FirstTarrifValetWeekDay: number
    SecondTariffValetWeekDay: number
    MaximalTariffValetWeekDay: number
    FirstTariffValetWeekEnd: number
    SecondTariffValetWeekEnd: number
    MaximalTariffValetWeekEnd: number
    FirstTariffVIPWeekDay: number
    SecondTariffVIPWeekDay: number
    MaximalTariffVIPWeekDay: number
    FirstTariffVIPWeekEnd: number
    SecondTariffVIPWeekEnd: number
    MaximalTariffVIPWeekEnd: number
    FirstTariffMotorWeekDay: number
    SecondTariffMotorWeekDay: number
    MaximalTariffMotorWeekDay: number
    FirstTariffMotorWeekEnd: number
    SecondTariffMotorWeekEnd: number
    MaximalTariffMotorWeekEnd: number
    RecordStatus: number
    CreatedAt: number
    CreatedBy: number
    UpdatedAt: number
    UpdatedBy: number
    _all: number
  }


  export type MasterTariffAvgAggregateInputType = {
    Id?: true
    FirstTariffMobilWeekDay?: true
    SecondTariffMobilWeekDay?: true
    MaximalTariffMobilWeekDay?: true
    FirstTariffMobilWeekEnd?: true
    SecondTariffMobilWeekEnd?: true
    MaximalTariffMobilWeekEnd?: true
    FirstTarrifValetWeekDay?: true
    SecondTariffValetWeekDay?: true
    MaximalTariffValetWeekDay?: true
    FirstTariffValetWeekEnd?: true
    SecondTariffValetWeekEnd?: true
    MaximalTariffValetWeekEnd?: true
    FirstTariffVIPWeekDay?: true
    SecondTariffVIPWeekDay?: true
    MaximalTariffVIPWeekDay?: true
    FirstTariffVIPWeekEnd?: true
    SecondTariffVIPWeekEnd?: true
    MaximalTariffVIPWeekEnd?: true
    FirstTariffMotorWeekDay?: true
    SecondTariffMotorWeekDay?: true
    MaximalTariffMotorWeekDay?: true
    FirstTariffMotorWeekEnd?: true
    SecondTariffMotorWeekEnd?: true
    MaximalTariffMotorWeekEnd?: true
  }

  export type MasterTariffSumAggregateInputType = {
    Id?: true
    FirstTariffMobilWeekDay?: true
    SecondTariffMobilWeekDay?: true
    MaximalTariffMobilWeekDay?: true
    FirstTariffMobilWeekEnd?: true
    SecondTariffMobilWeekEnd?: true
    MaximalTariffMobilWeekEnd?: true
    FirstTarrifValetWeekDay?: true
    SecondTariffValetWeekDay?: true
    MaximalTariffValetWeekDay?: true
    FirstTariffValetWeekEnd?: true
    SecondTariffValetWeekEnd?: true
    MaximalTariffValetWeekEnd?: true
    FirstTariffVIPWeekDay?: true
    SecondTariffVIPWeekDay?: true
    MaximalTariffVIPWeekDay?: true
    FirstTariffVIPWeekEnd?: true
    SecondTariffVIPWeekEnd?: true
    MaximalTariffVIPWeekEnd?: true
    FirstTariffMotorWeekDay?: true
    SecondTariffMotorWeekDay?: true
    MaximalTariffMotorWeekDay?: true
    FirstTariffMotorWeekEnd?: true
    SecondTariffMotorWeekEnd?: true
    MaximalTariffMotorWeekEnd?: true
  }

  export type MasterTariffMinAggregateInputType = {
    Id?: true
    LocationCode?: true
    LocationName?: true
    FirstTariffMobilWeekDay?: true
    SecondTariffMobilWeekDay?: true
    MaximalTariffMobilWeekDay?: true
    FirstTariffMobilWeekEnd?: true
    SecondTariffMobilWeekEnd?: true
    MaximalTariffMobilWeekEnd?: true
    FirstTarrifValetWeekDay?: true
    SecondTariffValetWeekDay?: true
    MaximalTariffValetWeekDay?: true
    FirstTariffValetWeekEnd?: true
    SecondTariffValetWeekEnd?: true
    MaximalTariffValetWeekEnd?: true
    FirstTariffVIPWeekDay?: true
    SecondTariffVIPWeekDay?: true
    MaximalTariffVIPWeekDay?: true
    FirstTariffVIPWeekEnd?: true
    SecondTariffVIPWeekEnd?: true
    MaximalTariffVIPWeekEnd?: true
    FirstTariffMotorWeekDay?: true
    SecondTariffMotorWeekDay?: true
    MaximalTariffMotorWeekDay?: true
    FirstTariffMotorWeekEnd?: true
    SecondTariffMotorWeekEnd?: true
    MaximalTariffMotorWeekEnd?: true
    RecordStatus?: true
    CreatedAt?: true
    CreatedBy?: true
    UpdatedAt?: true
    UpdatedBy?: true
  }

  export type MasterTariffMaxAggregateInputType = {
    Id?: true
    LocationCode?: true
    LocationName?: true
    FirstTariffMobilWeekDay?: true
    SecondTariffMobilWeekDay?: true
    MaximalTariffMobilWeekDay?: true
    FirstTariffMobilWeekEnd?: true
    SecondTariffMobilWeekEnd?: true
    MaximalTariffMobilWeekEnd?: true
    FirstTarrifValetWeekDay?: true
    SecondTariffValetWeekDay?: true
    MaximalTariffValetWeekDay?: true
    FirstTariffValetWeekEnd?: true
    SecondTariffValetWeekEnd?: true
    MaximalTariffValetWeekEnd?: true
    FirstTariffVIPWeekDay?: true
    SecondTariffVIPWeekDay?: true
    MaximalTariffVIPWeekDay?: true
    FirstTariffVIPWeekEnd?: true
    SecondTariffVIPWeekEnd?: true
    MaximalTariffVIPWeekEnd?: true
    FirstTariffMotorWeekDay?: true
    SecondTariffMotorWeekDay?: true
    MaximalTariffMotorWeekDay?: true
    FirstTariffMotorWeekEnd?: true
    SecondTariffMotorWeekEnd?: true
    MaximalTariffMotorWeekEnd?: true
    RecordStatus?: true
    CreatedAt?: true
    CreatedBy?: true
    UpdatedAt?: true
    UpdatedBy?: true
  }

  export type MasterTariffCountAggregateInputType = {
    Id?: true
    LocationCode?: true
    LocationName?: true
    FirstTariffMobilWeekDay?: true
    SecondTariffMobilWeekDay?: true
    MaximalTariffMobilWeekDay?: true
    FirstTariffMobilWeekEnd?: true
    SecondTariffMobilWeekEnd?: true
    MaximalTariffMobilWeekEnd?: true
    FirstTarrifValetWeekDay?: true
    SecondTariffValetWeekDay?: true
    MaximalTariffValetWeekDay?: true
    FirstTariffValetWeekEnd?: true
    SecondTariffValetWeekEnd?: true
    MaximalTariffValetWeekEnd?: true
    FirstTariffVIPWeekDay?: true
    SecondTariffVIPWeekDay?: true
    MaximalTariffVIPWeekDay?: true
    FirstTariffVIPWeekEnd?: true
    SecondTariffVIPWeekEnd?: true
    MaximalTariffVIPWeekEnd?: true
    FirstTariffMotorWeekDay?: true
    SecondTariffMotorWeekDay?: true
    MaximalTariffMotorWeekDay?: true
    FirstTariffMotorWeekEnd?: true
    SecondTariffMotorWeekEnd?: true
    MaximalTariffMotorWeekEnd?: true
    RecordStatus?: true
    CreatedAt?: true
    CreatedBy?: true
    UpdatedAt?: true
    UpdatedBy?: true
    _all?: true
  }

  export type MasterTariffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterTariff to aggregate.
     */
    where?: MasterTariffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterTariffs to fetch.
     */
    orderBy?: MasterTariffOrderByWithRelationInput | MasterTariffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterTariffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterTariffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterTariffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterTariffs
    **/
    _count?: true | MasterTariffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MasterTariffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MasterTariffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterTariffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterTariffMaxAggregateInputType
  }

  export type GetMasterTariffAggregateType<T extends MasterTariffAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterTariff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterTariff[P]>
      : GetScalarType<T[P], AggregateMasterTariff[P]>
  }




  export type MasterTariffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterTariffWhereInput
    orderBy?: MasterTariffOrderByWithAggregationInput | MasterTariffOrderByWithAggregationInput[]
    by: MasterTariffScalarFieldEnum[] | MasterTariffScalarFieldEnum
    having?: MasterTariffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterTariffCountAggregateInputType | true
    _avg?: MasterTariffAvgAggregateInputType
    _sum?: MasterTariffSumAggregateInputType
    _min?: MasterTariffMinAggregateInputType
    _max?: MasterTariffMaxAggregateInputType
  }

  export type MasterTariffGroupByOutputType = {
    Id: number
    LocationCode: string
    LocationName: string
    FirstTariffMobilWeekDay: number | null
    SecondTariffMobilWeekDay: number | null
    MaximalTariffMobilWeekDay: number | null
    FirstTariffMobilWeekEnd: number | null
    SecondTariffMobilWeekEnd: number | null
    MaximalTariffMobilWeekEnd: number | null
    FirstTarrifValetWeekDay: number | null
    SecondTariffValetWeekDay: number | null
    MaximalTariffValetWeekDay: number | null
    FirstTariffValetWeekEnd: number | null
    SecondTariffValetWeekEnd: number | null
    MaximalTariffValetWeekEnd: number | null
    FirstTariffVIPWeekDay: number | null
    SecondTariffVIPWeekDay: number | null
    MaximalTariffVIPWeekDay: number | null
    FirstTariffVIPWeekEnd: number | null
    SecondTariffVIPWeekEnd: number | null
    MaximalTariffVIPWeekEnd: number | null
    FirstTariffMotorWeekDay: number | null
    SecondTariffMotorWeekDay: number | null
    MaximalTariffMotorWeekDay: number | null
    FirstTariffMotorWeekEnd: number | null
    SecondTariffMotorWeekEnd: number | null
    MaximalTariffMotorWeekEnd: number | null
    RecordStatus: $Enums.RecordStatus
    CreatedAt: Date
    CreatedBy: string
    UpdatedAt: Date
    UpdatedBy: string | null
    _count: MasterTariffCountAggregateOutputType | null
    _avg: MasterTariffAvgAggregateOutputType | null
    _sum: MasterTariffSumAggregateOutputType | null
    _min: MasterTariffMinAggregateOutputType | null
    _max: MasterTariffMaxAggregateOutputType | null
  }

  type GetMasterTariffGroupByPayload<T extends MasterTariffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterTariffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterTariffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterTariffGroupByOutputType[P]>
            : GetScalarType<T[P], MasterTariffGroupByOutputType[P]>
        }
      >
    >


  export type MasterTariffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    LocationCode?: boolean
    LocationName?: boolean
    FirstTariffMobilWeekDay?: boolean
    SecondTariffMobilWeekDay?: boolean
    MaximalTariffMobilWeekDay?: boolean
    FirstTariffMobilWeekEnd?: boolean
    SecondTariffMobilWeekEnd?: boolean
    MaximalTariffMobilWeekEnd?: boolean
    FirstTarrifValetWeekDay?: boolean
    SecondTariffValetWeekDay?: boolean
    MaximalTariffValetWeekDay?: boolean
    FirstTariffValetWeekEnd?: boolean
    SecondTariffValetWeekEnd?: boolean
    MaximalTariffValetWeekEnd?: boolean
    FirstTariffVIPWeekDay?: boolean
    SecondTariffVIPWeekDay?: boolean
    MaximalTariffVIPWeekDay?: boolean
    FirstTariffVIPWeekEnd?: boolean
    SecondTariffVIPWeekEnd?: boolean
    MaximalTariffVIPWeekEnd?: boolean
    FirstTariffMotorWeekDay?: boolean
    SecondTariffMotorWeekDay?: boolean
    MaximalTariffMotorWeekDay?: boolean
    FirstTariffMotorWeekEnd?: boolean
    SecondTariffMotorWeekEnd?: boolean
    MaximalTariffMotorWeekEnd?: boolean
    RecordStatus?: boolean
    CreatedAt?: boolean
    CreatedBy?: boolean
    UpdatedAt?: boolean
    UpdatedBy?: boolean
  }, ExtArgs["result"]["masterTariff"]>



  export type MasterTariffSelectScalar = {
    Id?: boolean
    LocationCode?: boolean
    LocationName?: boolean
    FirstTariffMobilWeekDay?: boolean
    SecondTariffMobilWeekDay?: boolean
    MaximalTariffMobilWeekDay?: boolean
    FirstTariffMobilWeekEnd?: boolean
    SecondTariffMobilWeekEnd?: boolean
    MaximalTariffMobilWeekEnd?: boolean
    FirstTarrifValetWeekDay?: boolean
    SecondTariffValetWeekDay?: boolean
    MaximalTariffValetWeekDay?: boolean
    FirstTariffValetWeekEnd?: boolean
    SecondTariffValetWeekEnd?: boolean
    MaximalTariffValetWeekEnd?: boolean
    FirstTariffVIPWeekDay?: boolean
    SecondTariffVIPWeekDay?: boolean
    MaximalTariffVIPWeekDay?: boolean
    FirstTariffVIPWeekEnd?: boolean
    SecondTariffVIPWeekEnd?: boolean
    MaximalTariffVIPWeekEnd?: boolean
    FirstTariffMotorWeekDay?: boolean
    SecondTariffMotorWeekDay?: boolean
    MaximalTariffMotorWeekDay?: boolean
    FirstTariffMotorWeekEnd?: boolean
    SecondTariffMotorWeekEnd?: boolean
    MaximalTariffMotorWeekEnd?: boolean
    RecordStatus?: boolean
    CreatedAt?: boolean
    CreatedBy?: boolean
    UpdatedAt?: boolean
    UpdatedBy?: boolean
  }

  export type MasterTariffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "LocationCode" | "LocationName" | "FirstTariffMobilWeekDay" | "SecondTariffMobilWeekDay" | "MaximalTariffMobilWeekDay" | "FirstTariffMobilWeekEnd" | "SecondTariffMobilWeekEnd" | "MaximalTariffMobilWeekEnd" | "FirstTarrifValetWeekDay" | "SecondTariffValetWeekDay" | "MaximalTariffValetWeekDay" | "FirstTariffValetWeekEnd" | "SecondTariffValetWeekEnd" | "MaximalTariffValetWeekEnd" | "FirstTariffVIPWeekDay" | "SecondTariffVIPWeekDay" | "MaximalTariffVIPWeekDay" | "FirstTariffVIPWeekEnd" | "SecondTariffVIPWeekEnd" | "MaximalTariffVIPWeekEnd" | "FirstTariffMotorWeekDay" | "SecondTariffMotorWeekDay" | "MaximalTariffMotorWeekDay" | "FirstTariffMotorWeekEnd" | "SecondTariffMotorWeekEnd" | "MaximalTariffMotorWeekEnd" | "RecordStatus" | "CreatedAt" | "CreatedBy" | "UpdatedAt" | "UpdatedBy", ExtArgs["result"]["masterTariff"]>

  export type $MasterTariffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterTariff"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      LocationCode: string
      LocationName: string
      FirstTariffMobilWeekDay: number | null
      SecondTariffMobilWeekDay: number | null
      MaximalTariffMobilWeekDay: number | null
      FirstTariffMobilWeekEnd: number | null
      SecondTariffMobilWeekEnd: number | null
      MaximalTariffMobilWeekEnd: number | null
      FirstTarrifValetWeekDay: number | null
      SecondTariffValetWeekDay: number | null
      MaximalTariffValetWeekDay: number | null
      FirstTariffValetWeekEnd: number | null
      SecondTariffValetWeekEnd: number | null
      MaximalTariffValetWeekEnd: number | null
      FirstTariffVIPWeekDay: number | null
      SecondTariffVIPWeekDay: number | null
      MaximalTariffVIPWeekDay: number | null
      FirstTariffVIPWeekEnd: number | null
      SecondTariffVIPWeekEnd: number | null
      MaximalTariffVIPWeekEnd: number | null
      FirstTariffMotorWeekDay: number | null
      SecondTariffMotorWeekDay: number | null
      MaximalTariffMotorWeekDay: number | null
      FirstTariffMotorWeekEnd: number | null
      SecondTariffMotorWeekEnd: number | null
      MaximalTariffMotorWeekEnd: number | null
      RecordStatus: $Enums.RecordStatus
      CreatedAt: Date
      CreatedBy: string
      UpdatedAt: Date
      UpdatedBy: string | null
    }, ExtArgs["result"]["masterTariff"]>
    composites: {}
  }

  type MasterTariffGetPayload<S extends boolean | null | undefined | MasterTariffDefaultArgs> = $Result.GetResult<Prisma.$MasterTariffPayload, S>

  type MasterTariffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MasterTariffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MasterTariffCountAggregateInputType | true
    }

  export interface MasterTariffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterTariff'], meta: { name: 'MasterTariff' } }
    /**
     * Find zero or one MasterTariff that matches the filter.
     * @param {MasterTariffFindUniqueArgs} args - Arguments to find a MasterTariff
     * @example
     * // Get one MasterTariff
     * const masterTariff = await prisma.masterTariff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterTariffFindUniqueArgs>(args: SelectSubset<T, MasterTariffFindUniqueArgs<ExtArgs>>): Prisma__MasterTariffClient<$Result.GetResult<Prisma.$MasterTariffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MasterTariff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasterTariffFindUniqueOrThrowArgs} args - Arguments to find a MasterTariff
     * @example
     * // Get one MasterTariff
     * const masterTariff = await prisma.masterTariff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterTariffFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterTariffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterTariffClient<$Result.GetResult<Prisma.$MasterTariffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterTariff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterTariffFindFirstArgs} args - Arguments to find a MasterTariff
     * @example
     * // Get one MasterTariff
     * const masterTariff = await prisma.masterTariff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterTariffFindFirstArgs>(args?: SelectSubset<T, MasterTariffFindFirstArgs<ExtArgs>>): Prisma__MasterTariffClient<$Result.GetResult<Prisma.$MasterTariffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterTariff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterTariffFindFirstOrThrowArgs} args - Arguments to find a MasterTariff
     * @example
     * // Get one MasterTariff
     * const masterTariff = await prisma.masterTariff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterTariffFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterTariffFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterTariffClient<$Result.GetResult<Prisma.$MasterTariffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MasterTariffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterTariffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterTariffs
     * const masterTariffs = await prisma.masterTariff.findMany()
     * 
     * // Get first 10 MasterTariffs
     * const masterTariffs = await prisma.masterTariff.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const masterTariffWithIdOnly = await prisma.masterTariff.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends MasterTariffFindManyArgs>(args?: SelectSubset<T, MasterTariffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterTariffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MasterTariff.
     * @param {MasterTariffCreateArgs} args - Arguments to create a MasterTariff.
     * @example
     * // Create one MasterTariff
     * const MasterTariff = await prisma.masterTariff.create({
     *   data: {
     *     // ... data to create a MasterTariff
     *   }
     * })
     * 
     */
    create<T extends MasterTariffCreateArgs>(args: SelectSubset<T, MasterTariffCreateArgs<ExtArgs>>): Prisma__MasterTariffClient<$Result.GetResult<Prisma.$MasterTariffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MasterTariffs.
     * @param {MasterTariffCreateManyArgs} args - Arguments to create many MasterTariffs.
     * @example
     * // Create many MasterTariffs
     * const masterTariff = await prisma.masterTariff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterTariffCreateManyArgs>(args?: SelectSubset<T, MasterTariffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MasterTariff.
     * @param {MasterTariffDeleteArgs} args - Arguments to delete one MasterTariff.
     * @example
     * // Delete one MasterTariff
     * const MasterTariff = await prisma.masterTariff.delete({
     *   where: {
     *     // ... filter to delete one MasterTariff
     *   }
     * })
     * 
     */
    delete<T extends MasterTariffDeleteArgs>(args: SelectSubset<T, MasterTariffDeleteArgs<ExtArgs>>): Prisma__MasterTariffClient<$Result.GetResult<Prisma.$MasterTariffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MasterTariff.
     * @param {MasterTariffUpdateArgs} args - Arguments to update one MasterTariff.
     * @example
     * // Update one MasterTariff
     * const masterTariff = await prisma.masterTariff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterTariffUpdateArgs>(args: SelectSubset<T, MasterTariffUpdateArgs<ExtArgs>>): Prisma__MasterTariffClient<$Result.GetResult<Prisma.$MasterTariffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MasterTariffs.
     * @param {MasterTariffDeleteManyArgs} args - Arguments to filter MasterTariffs to delete.
     * @example
     * // Delete a few MasterTariffs
     * const { count } = await prisma.masterTariff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterTariffDeleteManyArgs>(args?: SelectSubset<T, MasterTariffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterTariffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterTariffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterTariffs
     * const masterTariff = await prisma.masterTariff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterTariffUpdateManyArgs>(args: SelectSubset<T, MasterTariffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MasterTariff.
     * @param {MasterTariffUpsertArgs} args - Arguments to update or create a MasterTariff.
     * @example
     * // Update or create a MasterTariff
     * const masterTariff = await prisma.masterTariff.upsert({
     *   create: {
     *     // ... data to create a MasterTariff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterTariff we want to update
     *   }
     * })
     */
    upsert<T extends MasterTariffUpsertArgs>(args: SelectSubset<T, MasterTariffUpsertArgs<ExtArgs>>): Prisma__MasterTariffClient<$Result.GetResult<Prisma.$MasterTariffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MasterTariffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterTariffCountArgs} args - Arguments to filter MasterTariffs to count.
     * @example
     * // Count the number of MasterTariffs
     * const count = await prisma.masterTariff.count({
     *   where: {
     *     // ... the filter for the MasterTariffs we want to count
     *   }
     * })
    **/
    count<T extends MasterTariffCountArgs>(
      args?: Subset<T, MasterTariffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterTariffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterTariff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterTariffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MasterTariffAggregateArgs>(args: Subset<T, MasterTariffAggregateArgs>): Prisma.PrismaPromise<GetMasterTariffAggregateType<T>>

    /**
     * Group by MasterTariff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterTariffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MasterTariffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterTariffGroupByArgs['orderBy'] }
        : { orderBy?: MasterTariffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MasterTariffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterTariffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterTariff model
   */
  readonly fields: MasterTariffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterTariff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterTariffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MasterTariff model
   */
  interface MasterTariffFieldRefs {
    readonly Id: FieldRef<"MasterTariff", 'Int'>
    readonly LocationCode: FieldRef<"MasterTariff", 'String'>
    readonly LocationName: FieldRef<"MasterTariff", 'String'>
    readonly FirstTariffMobilWeekDay: FieldRef<"MasterTariff", 'Int'>
    readonly SecondTariffMobilWeekDay: FieldRef<"MasterTariff", 'Int'>
    readonly MaximalTariffMobilWeekDay: FieldRef<"MasterTariff", 'Int'>
    readonly FirstTariffMobilWeekEnd: FieldRef<"MasterTariff", 'Int'>
    readonly SecondTariffMobilWeekEnd: FieldRef<"MasterTariff", 'Int'>
    readonly MaximalTariffMobilWeekEnd: FieldRef<"MasterTariff", 'Int'>
    readonly FirstTarrifValetWeekDay: FieldRef<"MasterTariff", 'Int'>
    readonly SecondTariffValetWeekDay: FieldRef<"MasterTariff", 'Int'>
    readonly MaximalTariffValetWeekDay: FieldRef<"MasterTariff", 'Int'>
    readonly FirstTariffValetWeekEnd: FieldRef<"MasterTariff", 'Int'>
    readonly SecondTariffValetWeekEnd: FieldRef<"MasterTariff", 'Int'>
    readonly MaximalTariffValetWeekEnd: FieldRef<"MasterTariff", 'Int'>
    readonly FirstTariffVIPWeekDay: FieldRef<"MasterTariff", 'Int'>
    readonly SecondTariffVIPWeekDay: FieldRef<"MasterTariff", 'Int'>
    readonly MaximalTariffVIPWeekDay: FieldRef<"MasterTariff", 'Int'>
    readonly FirstTariffVIPWeekEnd: FieldRef<"MasterTariff", 'Int'>
    readonly SecondTariffVIPWeekEnd: FieldRef<"MasterTariff", 'Int'>
    readonly MaximalTariffVIPWeekEnd: FieldRef<"MasterTariff", 'Int'>
    readonly FirstTariffMotorWeekDay: FieldRef<"MasterTariff", 'Int'>
    readonly SecondTariffMotorWeekDay: FieldRef<"MasterTariff", 'Int'>
    readonly MaximalTariffMotorWeekDay: FieldRef<"MasterTariff", 'Int'>
    readonly FirstTariffMotorWeekEnd: FieldRef<"MasterTariff", 'Int'>
    readonly SecondTariffMotorWeekEnd: FieldRef<"MasterTariff", 'Int'>
    readonly MaximalTariffMotorWeekEnd: FieldRef<"MasterTariff", 'Int'>
    readonly RecordStatus: FieldRef<"MasterTariff", 'RecordStatus'>
    readonly CreatedAt: FieldRef<"MasterTariff", 'DateTime'>
    readonly CreatedBy: FieldRef<"MasterTariff", 'String'>
    readonly UpdatedAt: FieldRef<"MasterTariff", 'DateTime'>
    readonly UpdatedBy: FieldRef<"MasterTariff", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MasterTariff findUnique
   */
  export type MasterTariffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTariff
     */
    select?: MasterTariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTariff
     */
    omit?: MasterTariffOmit<ExtArgs> | null
    /**
     * Filter, which MasterTariff to fetch.
     */
    where: MasterTariffWhereUniqueInput
  }

  /**
   * MasterTariff findUniqueOrThrow
   */
  export type MasterTariffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTariff
     */
    select?: MasterTariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTariff
     */
    omit?: MasterTariffOmit<ExtArgs> | null
    /**
     * Filter, which MasterTariff to fetch.
     */
    where: MasterTariffWhereUniqueInput
  }

  /**
   * MasterTariff findFirst
   */
  export type MasterTariffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTariff
     */
    select?: MasterTariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTariff
     */
    omit?: MasterTariffOmit<ExtArgs> | null
    /**
     * Filter, which MasterTariff to fetch.
     */
    where?: MasterTariffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterTariffs to fetch.
     */
    orderBy?: MasterTariffOrderByWithRelationInput | MasterTariffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterTariffs.
     */
    cursor?: MasterTariffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterTariffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterTariffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterTariffs.
     */
    distinct?: MasterTariffScalarFieldEnum | MasterTariffScalarFieldEnum[]
  }

  /**
   * MasterTariff findFirstOrThrow
   */
  export type MasterTariffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTariff
     */
    select?: MasterTariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTariff
     */
    omit?: MasterTariffOmit<ExtArgs> | null
    /**
     * Filter, which MasterTariff to fetch.
     */
    where?: MasterTariffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterTariffs to fetch.
     */
    orderBy?: MasterTariffOrderByWithRelationInput | MasterTariffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterTariffs.
     */
    cursor?: MasterTariffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterTariffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterTariffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterTariffs.
     */
    distinct?: MasterTariffScalarFieldEnum | MasterTariffScalarFieldEnum[]
  }

  /**
   * MasterTariff findMany
   */
  export type MasterTariffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTariff
     */
    select?: MasterTariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTariff
     */
    omit?: MasterTariffOmit<ExtArgs> | null
    /**
     * Filter, which MasterTariffs to fetch.
     */
    where?: MasterTariffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterTariffs to fetch.
     */
    orderBy?: MasterTariffOrderByWithRelationInput | MasterTariffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterTariffs.
     */
    cursor?: MasterTariffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterTariffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterTariffs.
     */
    skip?: number
    distinct?: MasterTariffScalarFieldEnum | MasterTariffScalarFieldEnum[]
  }

  /**
   * MasterTariff create
   */
  export type MasterTariffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTariff
     */
    select?: MasterTariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTariff
     */
    omit?: MasterTariffOmit<ExtArgs> | null
    /**
     * The data needed to create a MasterTariff.
     */
    data: XOR<MasterTariffCreateInput, MasterTariffUncheckedCreateInput>
  }

  /**
   * MasterTariff createMany
   */
  export type MasterTariffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterTariffs.
     */
    data: MasterTariffCreateManyInput | MasterTariffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterTariff update
   */
  export type MasterTariffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTariff
     */
    select?: MasterTariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTariff
     */
    omit?: MasterTariffOmit<ExtArgs> | null
    /**
     * The data needed to update a MasterTariff.
     */
    data: XOR<MasterTariffUpdateInput, MasterTariffUncheckedUpdateInput>
    /**
     * Choose, which MasterTariff to update.
     */
    where: MasterTariffWhereUniqueInput
  }

  /**
   * MasterTariff updateMany
   */
  export type MasterTariffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterTariffs.
     */
    data: XOR<MasterTariffUpdateManyMutationInput, MasterTariffUncheckedUpdateManyInput>
    /**
     * Filter which MasterTariffs to update
     */
    where?: MasterTariffWhereInput
    /**
     * Limit how many MasterTariffs to update.
     */
    limit?: number
  }

  /**
   * MasterTariff upsert
   */
  export type MasterTariffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTariff
     */
    select?: MasterTariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTariff
     */
    omit?: MasterTariffOmit<ExtArgs> | null
    /**
     * The filter to search for the MasterTariff to update in case it exists.
     */
    where: MasterTariffWhereUniqueInput
    /**
     * In case the MasterTariff found by the `where` argument doesn't exist, create a new MasterTariff with this data.
     */
    create: XOR<MasterTariffCreateInput, MasterTariffUncheckedCreateInput>
    /**
     * In case the MasterTariff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterTariffUpdateInput, MasterTariffUncheckedUpdateInput>
  }

  /**
   * MasterTariff delete
   */
  export type MasterTariffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTariff
     */
    select?: MasterTariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTariff
     */
    omit?: MasterTariffOmit<ExtArgs> | null
    /**
     * Filter which MasterTariff to delete.
     */
    where: MasterTariffWhereUniqueInput
  }

  /**
   * MasterTariff deleteMany
   */
  export type MasterTariffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterTariffs to delete
     */
    where?: MasterTariffWhereInput
    /**
     * Limit how many MasterTariffs to delete.
     */
    limit?: number
  }

  /**
   * MasterTariff without action
   */
  export type MasterTariffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTariff
     */
    select?: MasterTariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTariff
     */
    omit?: MasterTariffOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MasterTariffScalarFieldEnum: {
    Id: 'Id',
    LocationCode: 'LocationCode',
    LocationName: 'LocationName',
    FirstTariffMobilWeekDay: 'FirstTariffMobilWeekDay',
    SecondTariffMobilWeekDay: 'SecondTariffMobilWeekDay',
    MaximalTariffMobilWeekDay: 'MaximalTariffMobilWeekDay',
    FirstTariffMobilWeekEnd: 'FirstTariffMobilWeekEnd',
    SecondTariffMobilWeekEnd: 'SecondTariffMobilWeekEnd',
    MaximalTariffMobilWeekEnd: 'MaximalTariffMobilWeekEnd',
    FirstTarrifValetWeekDay: 'FirstTarrifValetWeekDay',
    SecondTariffValetWeekDay: 'SecondTariffValetWeekDay',
    MaximalTariffValetWeekDay: 'MaximalTariffValetWeekDay',
    FirstTariffValetWeekEnd: 'FirstTariffValetWeekEnd',
    SecondTariffValetWeekEnd: 'SecondTariffValetWeekEnd',
    MaximalTariffValetWeekEnd: 'MaximalTariffValetWeekEnd',
    FirstTariffVIPWeekDay: 'FirstTariffVIPWeekDay',
    SecondTariffVIPWeekDay: 'SecondTariffVIPWeekDay',
    MaximalTariffVIPWeekDay: 'MaximalTariffVIPWeekDay',
    FirstTariffVIPWeekEnd: 'FirstTariffVIPWeekEnd',
    SecondTariffVIPWeekEnd: 'SecondTariffVIPWeekEnd',
    MaximalTariffVIPWeekEnd: 'MaximalTariffVIPWeekEnd',
    FirstTariffMotorWeekDay: 'FirstTariffMotorWeekDay',
    SecondTariffMotorWeekDay: 'SecondTariffMotorWeekDay',
    MaximalTariffMotorWeekDay: 'MaximalTariffMotorWeekDay',
    FirstTariffMotorWeekEnd: 'FirstTariffMotorWeekEnd',
    SecondTariffMotorWeekEnd: 'SecondTariffMotorWeekEnd',
    MaximalTariffMotorWeekEnd: 'MaximalTariffMotorWeekEnd',
    RecordStatus: 'RecordStatus',
    CreatedAt: 'CreatedAt',
    CreatedBy: 'CreatedBy',
    UpdatedAt: 'UpdatedAt',
    UpdatedBy: 'UpdatedBy'
  };

  export type MasterTariffScalarFieldEnum = (typeof MasterTariffScalarFieldEnum)[keyof typeof MasterTariffScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const MasterTariffOrderByRelevanceFieldEnum: {
    LocationCode: 'LocationCode',
    LocationName: 'LocationName',
    CreatedBy: 'CreatedBy',
    UpdatedBy: 'UpdatedBy'
  };

  export type MasterTariffOrderByRelevanceFieldEnum = (typeof MasterTariffOrderByRelevanceFieldEnum)[keyof typeof MasterTariffOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'RecordStatus'
   */
  export type EnumRecordStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecordStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type MasterTariffWhereInput = {
    AND?: MasterTariffWhereInput | MasterTariffWhereInput[]
    OR?: MasterTariffWhereInput[]
    NOT?: MasterTariffWhereInput | MasterTariffWhereInput[]
    Id?: IntFilter<"MasterTariff"> | number
    LocationCode?: StringFilter<"MasterTariff"> | string
    LocationName?: StringFilter<"MasterTariff"> | string
    FirstTariffMobilWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    SecondTariffMobilWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    MaximalTariffMobilWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    FirstTariffMobilWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    SecondTariffMobilWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    MaximalTariffMobilWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    FirstTarrifValetWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    SecondTariffValetWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    MaximalTariffValetWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    FirstTariffValetWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    SecondTariffValetWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    MaximalTariffValetWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    FirstTariffVIPWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    SecondTariffVIPWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    MaximalTariffVIPWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    FirstTariffVIPWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    SecondTariffVIPWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    MaximalTariffVIPWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    FirstTariffMotorWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    SecondTariffMotorWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    MaximalTariffMotorWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    FirstTariffMotorWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    SecondTariffMotorWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    MaximalTariffMotorWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    RecordStatus?: EnumRecordStatusFilter<"MasterTariff"> | $Enums.RecordStatus
    CreatedAt?: DateTimeFilter<"MasterTariff"> | Date | string
    CreatedBy?: StringFilter<"MasterTariff"> | string
    UpdatedAt?: DateTimeFilter<"MasterTariff"> | Date | string
    UpdatedBy?: StringNullableFilter<"MasterTariff"> | string | null
  }

  export type MasterTariffOrderByWithRelationInput = {
    Id?: SortOrder
    LocationCode?: SortOrder
    LocationName?: SortOrder
    FirstTariffMobilWeekDay?: SortOrderInput | SortOrder
    SecondTariffMobilWeekDay?: SortOrderInput | SortOrder
    MaximalTariffMobilWeekDay?: SortOrderInput | SortOrder
    FirstTariffMobilWeekEnd?: SortOrderInput | SortOrder
    SecondTariffMobilWeekEnd?: SortOrderInput | SortOrder
    MaximalTariffMobilWeekEnd?: SortOrderInput | SortOrder
    FirstTarrifValetWeekDay?: SortOrderInput | SortOrder
    SecondTariffValetWeekDay?: SortOrderInput | SortOrder
    MaximalTariffValetWeekDay?: SortOrderInput | SortOrder
    FirstTariffValetWeekEnd?: SortOrderInput | SortOrder
    SecondTariffValetWeekEnd?: SortOrderInput | SortOrder
    MaximalTariffValetWeekEnd?: SortOrderInput | SortOrder
    FirstTariffVIPWeekDay?: SortOrderInput | SortOrder
    SecondTariffVIPWeekDay?: SortOrderInput | SortOrder
    MaximalTariffVIPWeekDay?: SortOrderInput | SortOrder
    FirstTariffVIPWeekEnd?: SortOrderInput | SortOrder
    SecondTariffVIPWeekEnd?: SortOrderInput | SortOrder
    MaximalTariffVIPWeekEnd?: SortOrderInput | SortOrder
    FirstTariffMotorWeekDay?: SortOrderInput | SortOrder
    SecondTariffMotorWeekDay?: SortOrderInput | SortOrder
    MaximalTariffMotorWeekDay?: SortOrderInput | SortOrder
    FirstTariffMotorWeekEnd?: SortOrderInput | SortOrder
    SecondTariffMotorWeekEnd?: SortOrderInput | SortOrder
    MaximalTariffMotorWeekEnd?: SortOrderInput | SortOrder
    RecordStatus?: SortOrder
    CreatedAt?: SortOrder
    CreatedBy?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrderInput | SortOrder
    _relevance?: MasterTariffOrderByRelevanceInput
  }

  export type MasterTariffWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: MasterTariffWhereInput | MasterTariffWhereInput[]
    OR?: MasterTariffWhereInput[]
    NOT?: MasterTariffWhereInput | MasterTariffWhereInput[]
    LocationCode?: StringFilter<"MasterTariff"> | string
    LocationName?: StringFilter<"MasterTariff"> | string
    FirstTariffMobilWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    SecondTariffMobilWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    MaximalTariffMobilWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    FirstTariffMobilWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    SecondTariffMobilWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    MaximalTariffMobilWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    FirstTarrifValetWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    SecondTariffValetWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    MaximalTariffValetWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    FirstTariffValetWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    SecondTariffValetWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    MaximalTariffValetWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    FirstTariffVIPWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    SecondTariffVIPWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    MaximalTariffVIPWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    FirstTariffVIPWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    SecondTariffVIPWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    MaximalTariffVIPWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    FirstTariffMotorWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    SecondTariffMotorWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    MaximalTariffMotorWeekDay?: IntNullableFilter<"MasterTariff"> | number | null
    FirstTariffMotorWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    SecondTariffMotorWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    MaximalTariffMotorWeekEnd?: IntNullableFilter<"MasterTariff"> | number | null
    RecordStatus?: EnumRecordStatusFilter<"MasterTariff"> | $Enums.RecordStatus
    CreatedAt?: DateTimeFilter<"MasterTariff"> | Date | string
    CreatedBy?: StringFilter<"MasterTariff"> | string
    UpdatedAt?: DateTimeFilter<"MasterTariff"> | Date | string
    UpdatedBy?: StringNullableFilter<"MasterTariff"> | string | null
  }, "Id">

  export type MasterTariffOrderByWithAggregationInput = {
    Id?: SortOrder
    LocationCode?: SortOrder
    LocationName?: SortOrder
    FirstTariffMobilWeekDay?: SortOrderInput | SortOrder
    SecondTariffMobilWeekDay?: SortOrderInput | SortOrder
    MaximalTariffMobilWeekDay?: SortOrderInput | SortOrder
    FirstTariffMobilWeekEnd?: SortOrderInput | SortOrder
    SecondTariffMobilWeekEnd?: SortOrderInput | SortOrder
    MaximalTariffMobilWeekEnd?: SortOrderInput | SortOrder
    FirstTarrifValetWeekDay?: SortOrderInput | SortOrder
    SecondTariffValetWeekDay?: SortOrderInput | SortOrder
    MaximalTariffValetWeekDay?: SortOrderInput | SortOrder
    FirstTariffValetWeekEnd?: SortOrderInput | SortOrder
    SecondTariffValetWeekEnd?: SortOrderInput | SortOrder
    MaximalTariffValetWeekEnd?: SortOrderInput | SortOrder
    FirstTariffVIPWeekDay?: SortOrderInput | SortOrder
    SecondTariffVIPWeekDay?: SortOrderInput | SortOrder
    MaximalTariffVIPWeekDay?: SortOrderInput | SortOrder
    FirstTariffVIPWeekEnd?: SortOrderInput | SortOrder
    SecondTariffVIPWeekEnd?: SortOrderInput | SortOrder
    MaximalTariffVIPWeekEnd?: SortOrderInput | SortOrder
    FirstTariffMotorWeekDay?: SortOrderInput | SortOrder
    SecondTariffMotorWeekDay?: SortOrderInput | SortOrder
    MaximalTariffMotorWeekDay?: SortOrderInput | SortOrder
    FirstTariffMotorWeekEnd?: SortOrderInput | SortOrder
    SecondTariffMotorWeekEnd?: SortOrderInput | SortOrder
    MaximalTariffMotorWeekEnd?: SortOrderInput | SortOrder
    RecordStatus?: SortOrder
    CreatedAt?: SortOrder
    CreatedBy?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrderInput | SortOrder
    _count?: MasterTariffCountOrderByAggregateInput
    _avg?: MasterTariffAvgOrderByAggregateInput
    _max?: MasterTariffMaxOrderByAggregateInput
    _min?: MasterTariffMinOrderByAggregateInput
    _sum?: MasterTariffSumOrderByAggregateInput
  }

  export type MasterTariffScalarWhereWithAggregatesInput = {
    AND?: MasterTariffScalarWhereWithAggregatesInput | MasterTariffScalarWhereWithAggregatesInput[]
    OR?: MasterTariffScalarWhereWithAggregatesInput[]
    NOT?: MasterTariffScalarWhereWithAggregatesInput | MasterTariffScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"MasterTariff"> | number
    LocationCode?: StringWithAggregatesFilter<"MasterTariff"> | string
    LocationName?: StringWithAggregatesFilter<"MasterTariff"> | string
    FirstTariffMobilWeekDay?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    SecondTariffMobilWeekDay?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    MaximalTariffMobilWeekDay?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    FirstTariffMobilWeekEnd?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    SecondTariffMobilWeekEnd?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    MaximalTariffMobilWeekEnd?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    FirstTarrifValetWeekDay?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    SecondTariffValetWeekDay?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    MaximalTariffValetWeekDay?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    FirstTariffValetWeekEnd?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    SecondTariffValetWeekEnd?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    MaximalTariffValetWeekEnd?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    FirstTariffVIPWeekDay?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    SecondTariffVIPWeekDay?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    MaximalTariffVIPWeekDay?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    FirstTariffVIPWeekEnd?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    SecondTariffVIPWeekEnd?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    MaximalTariffVIPWeekEnd?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    FirstTariffMotorWeekDay?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    SecondTariffMotorWeekDay?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    MaximalTariffMotorWeekDay?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    FirstTariffMotorWeekEnd?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    SecondTariffMotorWeekEnd?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    MaximalTariffMotorWeekEnd?: IntNullableWithAggregatesFilter<"MasterTariff"> | number | null
    RecordStatus?: EnumRecordStatusWithAggregatesFilter<"MasterTariff"> | $Enums.RecordStatus
    CreatedAt?: DateTimeWithAggregatesFilter<"MasterTariff"> | Date | string
    CreatedBy?: StringWithAggregatesFilter<"MasterTariff"> | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"MasterTariff"> | Date | string
    UpdatedBy?: StringNullableWithAggregatesFilter<"MasterTariff"> | string | null
  }

  export type MasterTariffCreateInput = {
    LocationCode: string
    LocationName: string
    FirstTariffMobilWeekDay?: number | null
    SecondTariffMobilWeekDay?: number | null
    MaximalTariffMobilWeekDay?: number | null
    FirstTariffMobilWeekEnd?: number | null
    SecondTariffMobilWeekEnd?: number | null
    MaximalTariffMobilWeekEnd?: number | null
    FirstTarrifValetWeekDay?: number | null
    SecondTariffValetWeekDay?: number | null
    MaximalTariffValetWeekDay?: number | null
    FirstTariffValetWeekEnd?: number | null
    SecondTariffValetWeekEnd?: number | null
    MaximalTariffValetWeekEnd?: number | null
    FirstTariffVIPWeekDay?: number | null
    SecondTariffVIPWeekDay?: number | null
    MaximalTariffVIPWeekDay?: number | null
    FirstTariffVIPWeekEnd?: number | null
    SecondTariffVIPWeekEnd?: number | null
    MaximalTariffVIPWeekEnd?: number | null
    FirstTariffMotorWeekDay?: number | null
    SecondTariffMotorWeekDay?: number | null
    MaximalTariffMotorWeekDay?: number | null
    FirstTariffMotorWeekEnd?: number | null
    SecondTariffMotorWeekEnd?: number | null
    MaximalTariffMotorWeekEnd?: number | null
    RecordStatus?: $Enums.RecordStatus
    CreatedAt?: Date | string
    CreatedBy: string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
  }

  export type MasterTariffUncheckedCreateInput = {
    Id?: number
    LocationCode: string
    LocationName: string
    FirstTariffMobilWeekDay?: number | null
    SecondTariffMobilWeekDay?: number | null
    MaximalTariffMobilWeekDay?: number | null
    FirstTariffMobilWeekEnd?: number | null
    SecondTariffMobilWeekEnd?: number | null
    MaximalTariffMobilWeekEnd?: number | null
    FirstTarrifValetWeekDay?: number | null
    SecondTariffValetWeekDay?: number | null
    MaximalTariffValetWeekDay?: number | null
    FirstTariffValetWeekEnd?: number | null
    SecondTariffValetWeekEnd?: number | null
    MaximalTariffValetWeekEnd?: number | null
    FirstTariffVIPWeekDay?: number | null
    SecondTariffVIPWeekDay?: number | null
    MaximalTariffVIPWeekDay?: number | null
    FirstTariffVIPWeekEnd?: number | null
    SecondTariffVIPWeekEnd?: number | null
    MaximalTariffVIPWeekEnd?: number | null
    FirstTariffMotorWeekDay?: number | null
    SecondTariffMotorWeekDay?: number | null
    MaximalTariffMotorWeekDay?: number | null
    FirstTariffMotorWeekEnd?: number | null
    SecondTariffMotorWeekEnd?: number | null
    MaximalTariffMotorWeekEnd?: number | null
    RecordStatus?: $Enums.RecordStatus
    CreatedAt?: Date | string
    CreatedBy: string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
  }

  export type MasterTariffUpdateInput = {
    LocationCode?: StringFieldUpdateOperationsInput | string
    LocationName?: StringFieldUpdateOperationsInput | string
    FirstTariffMobilWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffMobilWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffMobilWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffMobilWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffMobilWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffMobilWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTarrifValetWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffValetWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffValetWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffValetWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffValetWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffValetWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffVIPWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffVIPWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffVIPWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffVIPWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffVIPWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffVIPWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffMotorWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffMotorWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffMotorWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffMotorWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffMotorWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffMotorWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    RecordStatus?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MasterTariffUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    LocationCode?: StringFieldUpdateOperationsInput | string
    LocationName?: StringFieldUpdateOperationsInput | string
    FirstTariffMobilWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffMobilWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffMobilWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffMobilWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffMobilWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffMobilWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTarrifValetWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffValetWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffValetWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffValetWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffValetWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffValetWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffVIPWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffVIPWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffVIPWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffVIPWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffVIPWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffVIPWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffMotorWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffMotorWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffMotorWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffMotorWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffMotorWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffMotorWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    RecordStatus?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MasterTariffCreateManyInput = {
    Id?: number
    LocationCode: string
    LocationName: string
    FirstTariffMobilWeekDay?: number | null
    SecondTariffMobilWeekDay?: number | null
    MaximalTariffMobilWeekDay?: number | null
    FirstTariffMobilWeekEnd?: number | null
    SecondTariffMobilWeekEnd?: number | null
    MaximalTariffMobilWeekEnd?: number | null
    FirstTarrifValetWeekDay?: number | null
    SecondTariffValetWeekDay?: number | null
    MaximalTariffValetWeekDay?: number | null
    FirstTariffValetWeekEnd?: number | null
    SecondTariffValetWeekEnd?: number | null
    MaximalTariffValetWeekEnd?: number | null
    FirstTariffVIPWeekDay?: number | null
    SecondTariffVIPWeekDay?: number | null
    MaximalTariffVIPWeekDay?: number | null
    FirstTariffVIPWeekEnd?: number | null
    SecondTariffVIPWeekEnd?: number | null
    MaximalTariffVIPWeekEnd?: number | null
    FirstTariffMotorWeekDay?: number | null
    SecondTariffMotorWeekDay?: number | null
    MaximalTariffMotorWeekDay?: number | null
    FirstTariffMotorWeekEnd?: number | null
    SecondTariffMotorWeekEnd?: number | null
    MaximalTariffMotorWeekEnd?: number | null
    RecordStatus?: $Enums.RecordStatus
    CreatedAt?: Date | string
    CreatedBy: string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
  }

  export type MasterTariffUpdateManyMutationInput = {
    LocationCode?: StringFieldUpdateOperationsInput | string
    LocationName?: StringFieldUpdateOperationsInput | string
    FirstTariffMobilWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffMobilWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffMobilWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffMobilWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffMobilWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffMobilWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTarrifValetWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffValetWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffValetWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffValetWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffValetWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffValetWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffVIPWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffVIPWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffVIPWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffVIPWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffVIPWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffVIPWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffMotorWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffMotorWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffMotorWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffMotorWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffMotorWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffMotorWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    RecordStatus?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MasterTariffUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    LocationCode?: StringFieldUpdateOperationsInput | string
    LocationName?: StringFieldUpdateOperationsInput | string
    FirstTariffMobilWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffMobilWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffMobilWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffMobilWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffMobilWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffMobilWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTarrifValetWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffValetWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffValetWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffValetWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffValetWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffValetWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffVIPWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffVIPWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffVIPWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffVIPWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffVIPWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffVIPWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffMotorWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffMotorWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffMotorWeekDay?: NullableIntFieldUpdateOperationsInput | number | null
    FirstTariffMotorWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    SecondTariffMotorWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    MaximalTariffMotorWeekEnd?: NullableIntFieldUpdateOperationsInput | number | null
    RecordStatus?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRecordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordStatus | EnumRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordStatus[]
    notIn?: $Enums.RecordStatus[]
    not?: NestedEnumRecordStatusFilter<$PrismaModel> | $Enums.RecordStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MasterTariffOrderByRelevanceInput = {
    fields: MasterTariffOrderByRelevanceFieldEnum | MasterTariffOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MasterTariffCountOrderByAggregateInput = {
    Id?: SortOrder
    LocationCode?: SortOrder
    LocationName?: SortOrder
    FirstTariffMobilWeekDay?: SortOrder
    SecondTariffMobilWeekDay?: SortOrder
    MaximalTariffMobilWeekDay?: SortOrder
    FirstTariffMobilWeekEnd?: SortOrder
    SecondTariffMobilWeekEnd?: SortOrder
    MaximalTariffMobilWeekEnd?: SortOrder
    FirstTarrifValetWeekDay?: SortOrder
    SecondTariffValetWeekDay?: SortOrder
    MaximalTariffValetWeekDay?: SortOrder
    FirstTariffValetWeekEnd?: SortOrder
    SecondTariffValetWeekEnd?: SortOrder
    MaximalTariffValetWeekEnd?: SortOrder
    FirstTariffVIPWeekDay?: SortOrder
    SecondTariffVIPWeekDay?: SortOrder
    MaximalTariffVIPWeekDay?: SortOrder
    FirstTariffVIPWeekEnd?: SortOrder
    SecondTariffVIPWeekEnd?: SortOrder
    MaximalTariffVIPWeekEnd?: SortOrder
    FirstTariffMotorWeekDay?: SortOrder
    SecondTariffMotorWeekDay?: SortOrder
    MaximalTariffMotorWeekDay?: SortOrder
    FirstTariffMotorWeekEnd?: SortOrder
    SecondTariffMotorWeekEnd?: SortOrder
    MaximalTariffMotorWeekEnd?: SortOrder
    RecordStatus?: SortOrder
    CreatedAt?: SortOrder
    CreatedBy?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrder
  }

  export type MasterTariffAvgOrderByAggregateInput = {
    Id?: SortOrder
    FirstTariffMobilWeekDay?: SortOrder
    SecondTariffMobilWeekDay?: SortOrder
    MaximalTariffMobilWeekDay?: SortOrder
    FirstTariffMobilWeekEnd?: SortOrder
    SecondTariffMobilWeekEnd?: SortOrder
    MaximalTariffMobilWeekEnd?: SortOrder
    FirstTarrifValetWeekDay?: SortOrder
    SecondTariffValetWeekDay?: SortOrder
    MaximalTariffValetWeekDay?: SortOrder
    FirstTariffValetWeekEnd?: SortOrder
    SecondTariffValetWeekEnd?: SortOrder
    MaximalTariffValetWeekEnd?: SortOrder
    FirstTariffVIPWeekDay?: SortOrder
    SecondTariffVIPWeekDay?: SortOrder
    MaximalTariffVIPWeekDay?: SortOrder
    FirstTariffVIPWeekEnd?: SortOrder
    SecondTariffVIPWeekEnd?: SortOrder
    MaximalTariffVIPWeekEnd?: SortOrder
    FirstTariffMotorWeekDay?: SortOrder
    SecondTariffMotorWeekDay?: SortOrder
    MaximalTariffMotorWeekDay?: SortOrder
    FirstTariffMotorWeekEnd?: SortOrder
    SecondTariffMotorWeekEnd?: SortOrder
    MaximalTariffMotorWeekEnd?: SortOrder
  }

  export type MasterTariffMaxOrderByAggregateInput = {
    Id?: SortOrder
    LocationCode?: SortOrder
    LocationName?: SortOrder
    FirstTariffMobilWeekDay?: SortOrder
    SecondTariffMobilWeekDay?: SortOrder
    MaximalTariffMobilWeekDay?: SortOrder
    FirstTariffMobilWeekEnd?: SortOrder
    SecondTariffMobilWeekEnd?: SortOrder
    MaximalTariffMobilWeekEnd?: SortOrder
    FirstTarrifValetWeekDay?: SortOrder
    SecondTariffValetWeekDay?: SortOrder
    MaximalTariffValetWeekDay?: SortOrder
    FirstTariffValetWeekEnd?: SortOrder
    SecondTariffValetWeekEnd?: SortOrder
    MaximalTariffValetWeekEnd?: SortOrder
    FirstTariffVIPWeekDay?: SortOrder
    SecondTariffVIPWeekDay?: SortOrder
    MaximalTariffVIPWeekDay?: SortOrder
    FirstTariffVIPWeekEnd?: SortOrder
    SecondTariffVIPWeekEnd?: SortOrder
    MaximalTariffVIPWeekEnd?: SortOrder
    FirstTariffMotorWeekDay?: SortOrder
    SecondTariffMotorWeekDay?: SortOrder
    MaximalTariffMotorWeekDay?: SortOrder
    FirstTariffMotorWeekEnd?: SortOrder
    SecondTariffMotorWeekEnd?: SortOrder
    MaximalTariffMotorWeekEnd?: SortOrder
    RecordStatus?: SortOrder
    CreatedAt?: SortOrder
    CreatedBy?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrder
  }

  export type MasterTariffMinOrderByAggregateInput = {
    Id?: SortOrder
    LocationCode?: SortOrder
    LocationName?: SortOrder
    FirstTariffMobilWeekDay?: SortOrder
    SecondTariffMobilWeekDay?: SortOrder
    MaximalTariffMobilWeekDay?: SortOrder
    FirstTariffMobilWeekEnd?: SortOrder
    SecondTariffMobilWeekEnd?: SortOrder
    MaximalTariffMobilWeekEnd?: SortOrder
    FirstTarrifValetWeekDay?: SortOrder
    SecondTariffValetWeekDay?: SortOrder
    MaximalTariffValetWeekDay?: SortOrder
    FirstTariffValetWeekEnd?: SortOrder
    SecondTariffValetWeekEnd?: SortOrder
    MaximalTariffValetWeekEnd?: SortOrder
    FirstTariffVIPWeekDay?: SortOrder
    SecondTariffVIPWeekDay?: SortOrder
    MaximalTariffVIPWeekDay?: SortOrder
    FirstTariffVIPWeekEnd?: SortOrder
    SecondTariffVIPWeekEnd?: SortOrder
    MaximalTariffVIPWeekEnd?: SortOrder
    FirstTariffMotorWeekDay?: SortOrder
    SecondTariffMotorWeekDay?: SortOrder
    MaximalTariffMotorWeekDay?: SortOrder
    FirstTariffMotorWeekEnd?: SortOrder
    SecondTariffMotorWeekEnd?: SortOrder
    MaximalTariffMotorWeekEnd?: SortOrder
    RecordStatus?: SortOrder
    CreatedAt?: SortOrder
    CreatedBy?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrder
  }

  export type MasterTariffSumOrderByAggregateInput = {
    Id?: SortOrder
    FirstTariffMobilWeekDay?: SortOrder
    SecondTariffMobilWeekDay?: SortOrder
    MaximalTariffMobilWeekDay?: SortOrder
    FirstTariffMobilWeekEnd?: SortOrder
    SecondTariffMobilWeekEnd?: SortOrder
    MaximalTariffMobilWeekEnd?: SortOrder
    FirstTarrifValetWeekDay?: SortOrder
    SecondTariffValetWeekDay?: SortOrder
    MaximalTariffValetWeekDay?: SortOrder
    FirstTariffValetWeekEnd?: SortOrder
    SecondTariffValetWeekEnd?: SortOrder
    MaximalTariffValetWeekEnd?: SortOrder
    FirstTariffVIPWeekDay?: SortOrder
    SecondTariffVIPWeekDay?: SortOrder
    MaximalTariffVIPWeekDay?: SortOrder
    FirstTariffVIPWeekEnd?: SortOrder
    SecondTariffVIPWeekEnd?: SortOrder
    MaximalTariffVIPWeekEnd?: SortOrder
    FirstTariffMotorWeekDay?: SortOrder
    SecondTariffMotorWeekDay?: SortOrder
    MaximalTariffMotorWeekDay?: SortOrder
    FirstTariffMotorWeekEnd?: SortOrder
    SecondTariffMotorWeekEnd?: SortOrder
    MaximalTariffMotorWeekEnd?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRecordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordStatus | EnumRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordStatus[]
    notIn?: $Enums.RecordStatus[]
    not?: NestedEnumRecordStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecordStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordStatusFilter<$PrismaModel>
    _max?: NestedEnumRecordStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRecordStatusFieldUpdateOperationsInput = {
    set?: $Enums.RecordStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRecordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordStatus | EnumRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordStatus[]
    notIn?: $Enums.RecordStatus[]
    not?: NestedEnumRecordStatusFilter<$PrismaModel> | $Enums.RecordStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRecordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordStatus | EnumRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordStatus[]
    notIn?: $Enums.RecordStatus[]
    not?: NestedEnumRecordStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecordStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordStatusFilter<$PrismaModel>
    _max?: NestedEnumRecordStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}