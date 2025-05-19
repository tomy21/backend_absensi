
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model DetailUsers
 * 
 */
export type DetailUsers = $Result.DefaultSelection<Prisma.$DetailUsersPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Record: {
  Active: 'Active',
  Inactive: 'Inactive',
  Delete: 'Delete'
};

export type Record = (typeof Record)[keyof typeof Record]


export const StatusKaryawan: {
  InHouse: 'InHouse',
  DailyWorker: 'DailyWorker'
};

export type StatusKaryawan = (typeof StatusKaryawan)[keyof typeof StatusKaryawan]


export const Status: {
  Active: 'Active',
  Inactive: 'Inactive',
  Waiting: 'Waiting'
};

export type Status = (typeof Status)[keyof typeof Status]


export const StatusAttendance: {
  Hadir: 'Hadir',
  Izin: 'Izin',
  Sakit: 'Sakit',
  Cuti: 'Cuti',
  Absen: 'Absen'
};

export type StatusAttendance = (typeof StatusAttendance)[keyof typeof StatusAttendance]

}

export type Record = $Enums.Record

export const Record: typeof $Enums.Record

export type StatusKaryawan = $Enums.StatusKaryawan

export const StatusKaryawan: typeof $Enums.StatusKaryawan

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type StatusAttendance = $Enums.StatusAttendance

export const StatusAttendance: typeof $Enums.StatusAttendance

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detailUsers`: Exposes CRUD operations for the **DetailUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailUsers
    * const detailUsers = await prisma.detailUsers.findMany()
    * ```
    */
  get detailUsers(): Prisma.DetailUsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;
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
    Users: 'Users',
    Role: 'Role',
    DetailUsers: 'DetailUsers',
    Attendance: 'Attendance'
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
      modelProps: "users" | "role" | "detailUsers" | "attendance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      DetailUsers: {
        payload: Prisma.$DetailUsersPayload<ExtArgs>
        fields: Prisma.DetailUsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetailUsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailUsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailUsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailUsersPayload>
          }
          findFirst: {
            args: Prisma.DetailUsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailUsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailUsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailUsersPayload>
          }
          findMany: {
            args: Prisma.DetailUsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailUsersPayload>[]
          }
          create: {
            args: Prisma.DetailUsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailUsersPayload>
          }
          createMany: {
            args: Prisma.DetailUsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DetailUsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailUsersPayload>
          }
          update: {
            args: Prisma.DetailUsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailUsersPayload>
          }
          deleteMany: {
            args: Prisma.DetailUsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetailUsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DetailUsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailUsersPayload>
          }
          aggregate: {
            args: Prisma.DetailUsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetailUsers>
          }
          groupBy: {
            args: Prisma.DetailUsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailUsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailUsersCountArgs<ExtArgs>
            result: $Utils.Optional<DetailUsersCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
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
    users?: UsersOmit
    role?: RoleOmit
    detailUsers?: DetailUsersOmit
    attendance?: AttendanceOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    user: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailUsersWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    RoleId: number | null
  }

  export type UsersSumAggregateOutputType = {
    RoleId: number | null
  }

  export type UsersMinAggregateOutputType = {
    Id: string | null
    Username: string | null
    Email: string | null
    Password: string | null
    RoleId: number | null
    CreatedAt: Date | null
    CreatedBy: string | null
    UpdatedAt: Date | null
    UpdatedBy: string | null
    DeletedAt: Date | null
    DeletedBy: string | null
    LastLogin: Date | null
    Record: $Enums.Record | null
  }

  export type UsersMaxAggregateOutputType = {
    Id: string | null
    Username: string | null
    Email: string | null
    Password: string | null
    RoleId: number | null
    CreatedAt: Date | null
    CreatedBy: string | null
    UpdatedAt: Date | null
    UpdatedBy: string | null
    DeletedAt: Date | null
    DeletedBy: string | null
    LastLogin: Date | null
    Record: $Enums.Record | null
  }

  export type UsersCountAggregateOutputType = {
    Id: number
    Username: number
    Email: number
    Password: number
    RoleId: number
    CreatedAt: number
    CreatedBy: number
    UpdatedAt: number
    UpdatedBy: number
    DeletedAt: number
    DeletedBy: number
    LastLogin: number
    Record: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    RoleId?: true
  }

  export type UsersSumAggregateInputType = {
    RoleId?: true
  }

  export type UsersMinAggregateInputType = {
    Id?: true
    Username?: true
    Email?: true
    Password?: true
    RoleId?: true
    CreatedAt?: true
    CreatedBy?: true
    UpdatedAt?: true
    UpdatedBy?: true
    DeletedAt?: true
    DeletedBy?: true
    LastLogin?: true
    Record?: true
  }

  export type UsersMaxAggregateInputType = {
    Id?: true
    Username?: true
    Email?: true
    Password?: true
    RoleId?: true
    CreatedAt?: true
    CreatedBy?: true
    UpdatedAt?: true
    UpdatedBy?: true
    DeletedAt?: true
    DeletedBy?: true
    LastLogin?: true
    Record?: true
  }

  export type UsersCountAggregateInputType = {
    Id?: true
    Username?: true
    Email?: true
    Password?: true
    RoleId?: true
    CreatedAt?: true
    CreatedBy?: true
    UpdatedAt?: true
    UpdatedBy?: true
    DeletedAt?: true
    DeletedBy?: true
    LastLogin?: true
    Record?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    Id: string
    Username: string
    Email: string
    Password: string
    RoleId: number
    CreatedAt: Date
    CreatedBy: string
    UpdatedAt: Date
    UpdatedBy: string | null
    DeletedAt: Date | null
    DeletedBy: string | null
    LastLogin: Date | null
    Record: $Enums.Record
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Username?: boolean
    Email?: boolean
    Password?: boolean
    RoleId?: boolean
    CreatedAt?: boolean
    CreatedBy?: boolean
    UpdatedAt?: boolean
    UpdatedBy?: boolean
    DeletedAt?: boolean
    DeletedBy?: boolean
    LastLogin?: boolean
    Record?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    user?: boolean | Users$userArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    Id?: boolean
    Username?: boolean
    Email?: boolean
    Password?: boolean
    RoleId?: boolean
    CreatedAt?: boolean
    CreatedBy?: boolean
    UpdatedAt?: boolean
    UpdatedBy?: boolean
    DeletedAt?: boolean
    DeletedBy?: boolean
    LastLogin?: boolean
    Record?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Username" | "Email" | "Password" | "RoleId" | "CreatedAt" | "CreatedBy" | "UpdatedAt" | "UpdatedBy" | "DeletedAt" | "DeletedBy" | "LastLogin" | "Record", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    user?: boolean | Users$userArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      user: Prisma.$DetailUsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Username: string
      Email: string
      Password: string
      RoleId: number
      CreatedAt: Date
      CreatedBy: string
      UpdatedAt: Date
      UpdatedBy: string | null
      DeletedAt: Date | null
      DeletedBy: string | null
      LastLogin: Date | null
      Record: $Enums.Record
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Users$userArgs<ExtArgs> = {}>(args?: Subset<T, Users$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailUsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly Id: FieldRef<"Users", 'String'>
    readonly Username: FieldRef<"Users", 'String'>
    readonly Email: FieldRef<"Users", 'String'>
    readonly Password: FieldRef<"Users", 'String'>
    readonly RoleId: FieldRef<"Users", 'Int'>
    readonly CreatedAt: FieldRef<"Users", 'DateTime'>
    readonly CreatedBy: FieldRef<"Users", 'String'>
    readonly UpdatedAt: FieldRef<"Users", 'DateTime'>
    readonly UpdatedBy: FieldRef<"Users", 'String'>
    readonly DeletedAt: FieldRef<"Users", 'DateTime'>
    readonly DeletedBy: FieldRef<"Users", 'String'>
    readonly LastLogin: FieldRef<"Users", 'DateTime'>
    readonly Record: FieldRef<"Users", 'Record'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.user
   */
  export type Users$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailUsers
     */
    select?: DetailUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailUsers
     */
    omit?: DetailUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailUsersInclude<ExtArgs> | null
    where?: DetailUsersWhereInput
    orderBy?: DetailUsersOrderByWithRelationInput | DetailUsersOrderByWithRelationInput[]
    cursor?: DetailUsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailUsersScalarFieldEnum | DetailUsersScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    Id: number | null
  }

  export type RoleSumAggregateOutputType = {
    Id: number | null
  }

  export type RoleMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    Id: number
    Name: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    Id?: true
  }

  export type RoleSumAggregateInputType = {
    Id?: true
  }

  export type RoleMinAggregateInputType = {
    Id?: true
    Name?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    Id?: true
    Name?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    Id?: true
    Name?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    Id: number
    Name: string
    CreatedAt: Date
    UpdatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    Id?: boolean
    Name?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Name: string
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly Id: FieldRef<"Role", 'Int'>
    readonly Name: FieldRef<"Role", 'String'>
    readonly CreatedAt: FieldRef<"Role", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model DetailUsers
   */

  export type AggregateDetailUsers = {
    _count: DetailUsersCountAggregateOutputType | null
    _min: DetailUsersMinAggregateOutputType | null
    _max: DetailUsersMaxAggregateOutputType | null
  }

  export type DetailUsersMinAggregateOutputType = {
    Id: string | null
    UserId: string | null
    NIK: string | null
    Name: string | null
    Departement: string | null
    Divisi: string | null
    Address: string | null
    NoTlp: string | null
    LocationCode: string | null
    StatusKaryawan: $Enums.StatusKaryawan | null
    Status: $Enums.Status | null
    CreatedBy: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    UpdatedBy: string | null
    DeletedAt: Date | null
    DeletedBy: string | null
    Record: $Enums.Record | null
  }

  export type DetailUsersMaxAggregateOutputType = {
    Id: string | null
    UserId: string | null
    NIK: string | null
    Name: string | null
    Departement: string | null
    Divisi: string | null
    Address: string | null
    NoTlp: string | null
    LocationCode: string | null
    StatusKaryawan: $Enums.StatusKaryawan | null
    Status: $Enums.Status | null
    CreatedBy: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    UpdatedBy: string | null
    DeletedAt: Date | null
    DeletedBy: string | null
    Record: $Enums.Record | null
  }

  export type DetailUsersCountAggregateOutputType = {
    Id: number
    UserId: number
    NIK: number
    Name: number
    Departement: number
    Divisi: number
    Address: number
    NoTlp: number
    LocationCode: number
    StatusKaryawan: number
    Status: number
    CreatedBy: number
    CreatedAt: number
    UpdatedAt: number
    UpdatedBy: number
    DeletedAt: number
    DeletedBy: number
    Record: number
    _all: number
  }


  export type DetailUsersMinAggregateInputType = {
    Id?: true
    UserId?: true
    NIK?: true
    Name?: true
    Departement?: true
    Divisi?: true
    Address?: true
    NoTlp?: true
    LocationCode?: true
    StatusKaryawan?: true
    Status?: true
    CreatedBy?: true
    CreatedAt?: true
    UpdatedAt?: true
    UpdatedBy?: true
    DeletedAt?: true
    DeletedBy?: true
    Record?: true
  }

  export type DetailUsersMaxAggregateInputType = {
    Id?: true
    UserId?: true
    NIK?: true
    Name?: true
    Departement?: true
    Divisi?: true
    Address?: true
    NoTlp?: true
    LocationCode?: true
    StatusKaryawan?: true
    Status?: true
    CreatedBy?: true
    CreatedAt?: true
    UpdatedAt?: true
    UpdatedBy?: true
    DeletedAt?: true
    DeletedBy?: true
    Record?: true
  }

  export type DetailUsersCountAggregateInputType = {
    Id?: true
    UserId?: true
    NIK?: true
    Name?: true
    Departement?: true
    Divisi?: true
    Address?: true
    NoTlp?: true
    LocationCode?: true
    StatusKaryawan?: true
    Status?: true
    CreatedBy?: true
    CreatedAt?: true
    UpdatedAt?: true
    UpdatedBy?: true
    DeletedAt?: true
    DeletedBy?: true
    Record?: true
    _all?: true
  }

  export type DetailUsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailUsers to aggregate.
     */
    where?: DetailUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailUsers to fetch.
     */
    orderBy?: DetailUsersOrderByWithRelationInput | DetailUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetailUsers
    **/
    _count?: true | DetailUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailUsersMaxAggregateInputType
  }

  export type GetDetailUsersAggregateType<T extends DetailUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailUsers[P]>
      : GetScalarType<T[P], AggregateDetailUsers[P]>
  }




  export type DetailUsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailUsersWhereInput
    orderBy?: DetailUsersOrderByWithAggregationInput | DetailUsersOrderByWithAggregationInput[]
    by: DetailUsersScalarFieldEnum[] | DetailUsersScalarFieldEnum
    having?: DetailUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailUsersCountAggregateInputType | true
    _min?: DetailUsersMinAggregateInputType
    _max?: DetailUsersMaxAggregateInputType
  }

  export type DetailUsersGroupByOutputType = {
    Id: string
    UserId: string
    NIK: string
    Name: string
    Departement: string
    Divisi: string
    Address: string | null
    NoTlp: string | null
    LocationCode: string | null
    StatusKaryawan: $Enums.StatusKaryawan
    Status: $Enums.Status
    CreatedBy: string
    CreatedAt: Date
    UpdatedAt: Date
    UpdatedBy: string | null
    DeletedAt: Date | null
    DeletedBy: string | null
    Record: $Enums.Record
    _count: DetailUsersCountAggregateOutputType | null
    _min: DetailUsersMinAggregateOutputType | null
    _max: DetailUsersMaxAggregateOutputType | null
  }

  type GetDetailUsersGroupByPayload<T extends DetailUsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailUsersGroupByOutputType[P]>
            : GetScalarType<T[P], DetailUsersGroupByOutputType[P]>
        }
      >
    >


  export type DetailUsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    UserId?: boolean
    NIK?: boolean
    Name?: boolean
    Departement?: boolean
    Divisi?: boolean
    Address?: boolean
    NoTlp?: boolean
    LocationCode?: boolean
    StatusKaryawan?: boolean
    Status?: boolean
    CreatedBy?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    UpdatedBy?: boolean
    DeletedAt?: boolean
    DeletedBy?: boolean
    Record?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailUsers"]>



  export type DetailUsersSelectScalar = {
    Id?: boolean
    UserId?: boolean
    NIK?: boolean
    Name?: boolean
    Departement?: boolean
    Divisi?: boolean
    Address?: boolean
    NoTlp?: boolean
    LocationCode?: boolean
    StatusKaryawan?: boolean
    Status?: boolean
    CreatedBy?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    UpdatedBy?: boolean
    DeletedAt?: boolean
    DeletedBy?: boolean
    Record?: boolean
  }

  export type DetailUsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "UserId" | "NIK" | "Name" | "Departement" | "Divisi" | "Address" | "NoTlp" | "LocationCode" | "StatusKaryawan" | "Status" | "CreatedBy" | "CreatedAt" | "UpdatedAt" | "UpdatedBy" | "DeletedAt" | "DeletedBy" | "Record", ExtArgs["result"]["detailUsers"]>
  export type DetailUsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $DetailUsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetailUsers"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      UserId: string
      NIK: string
      Name: string
      Departement: string
      Divisi: string
      Address: string | null
      NoTlp: string | null
      LocationCode: string | null
      StatusKaryawan: $Enums.StatusKaryawan
      Status: $Enums.Status
      CreatedBy: string
      CreatedAt: Date
      UpdatedAt: Date
      UpdatedBy: string | null
      DeletedAt: Date | null
      DeletedBy: string | null
      Record: $Enums.Record
    }, ExtArgs["result"]["detailUsers"]>
    composites: {}
  }

  type DetailUsersGetPayload<S extends boolean | null | undefined | DetailUsersDefaultArgs> = $Result.GetResult<Prisma.$DetailUsersPayload, S>

  type DetailUsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetailUsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailUsersCountAggregateInputType | true
    }

  export interface DetailUsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetailUsers'], meta: { name: 'DetailUsers' } }
    /**
     * Find zero or one DetailUsers that matches the filter.
     * @param {DetailUsersFindUniqueArgs} args - Arguments to find a DetailUsers
     * @example
     * // Get one DetailUsers
     * const detailUsers = await prisma.detailUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetailUsersFindUniqueArgs>(args: SelectSubset<T, DetailUsersFindUniqueArgs<ExtArgs>>): Prisma__DetailUsersClient<$Result.GetResult<Prisma.$DetailUsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetailUsers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetailUsersFindUniqueOrThrowArgs} args - Arguments to find a DetailUsers
     * @example
     * // Get one DetailUsers
     * const detailUsers = await prisma.detailUsers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetailUsersFindUniqueOrThrowArgs>(args: SelectSubset<T, DetailUsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetailUsersClient<$Result.GetResult<Prisma.$DetailUsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailUsersFindFirstArgs} args - Arguments to find a DetailUsers
     * @example
     * // Get one DetailUsers
     * const detailUsers = await prisma.detailUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetailUsersFindFirstArgs>(args?: SelectSubset<T, DetailUsersFindFirstArgs<ExtArgs>>): Prisma__DetailUsersClient<$Result.GetResult<Prisma.$DetailUsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailUsers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailUsersFindFirstOrThrowArgs} args - Arguments to find a DetailUsers
     * @example
     * // Get one DetailUsers
     * const detailUsers = await prisma.detailUsers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetailUsersFindFirstOrThrowArgs>(args?: SelectSubset<T, DetailUsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetailUsersClient<$Result.GetResult<Prisma.$DetailUsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetailUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailUsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailUsers
     * const detailUsers = await prisma.detailUsers.findMany()
     * 
     * // Get first 10 DetailUsers
     * const detailUsers = await prisma.detailUsers.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const detailUsersWithIdOnly = await prisma.detailUsers.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends DetailUsersFindManyArgs>(args?: SelectSubset<T, DetailUsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailUsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetailUsers.
     * @param {DetailUsersCreateArgs} args - Arguments to create a DetailUsers.
     * @example
     * // Create one DetailUsers
     * const DetailUsers = await prisma.detailUsers.create({
     *   data: {
     *     // ... data to create a DetailUsers
     *   }
     * })
     * 
     */
    create<T extends DetailUsersCreateArgs>(args: SelectSubset<T, DetailUsersCreateArgs<ExtArgs>>): Prisma__DetailUsersClient<$Result.GetResult<Prisma.$DetailUsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetailUsers.
     * @param {DetailUsersCreateManyArgs} args - Arguments to create many DetailUsers.
     * @example
     * // Create many DetailUsers
     * const detailUsers = await prisma.detailUsers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetailUsersCreateManyArgs>(args?: SelectSubset<T, DetailUsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetailUsers.
     * @param {DetailUsersDeleteArgs} args - Arguments to delete one DetailUsers.
     * @example
     * // Delete one DetailUsers
     * const DetailUsers = await prisma.detailUsers.delete({
     *   where: {
     *     // ... filter to delete one DetailUsers
     *   }
     * })
     * 
     */
    delete<T extends DetailUsersDeleteArgs>(args: SelectSubset<T, DetailUsersDeleteArgs<ExtArgs>>): Prisma__DetailUsersClient<$Result.GetResult<Prisma.$DetailUsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetailUsers.
     * @param {DetailUsersUpdateArgs} args - Arguments to update one DetailUsers.
     * @example
     * // Update one DetailUsers
     * const detailUsers = await prisma.detailUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetailUsersUpdateArgs>(args: SelectSubset<T, DetailUsersUpdateArgs<ExtArgs>>): Prisma__DetailUsersClient<$Result.GetResult<Prisma.$DetailUsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetailUsers.
     * @param {DetailUsersDeleteManyArgs} args - Arguments to filter DetailUsers to delete.
     * @example
     * // Delete a few DetailUsers
     * const { count } = await prisma.detailUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetailUsersDeleteManyArgs>(args?: SelectSubset<T, DetailUsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailUsers
     * const detailUsers = await prisma.detailUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetailUsersUpdateManyArgs>(args: SelectSubset<T, DetailUsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetailUsers.
     * @param {DetailUsersUpsertArgs} args - Arguments to update or create a DetailUsers.
     * @example
     * // Update or create a DetailUsers
     * const detailUsers = await prisma.detailUsers.upsert({
     *   create: {
     *     // ... data to create a DetailUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailUsers we want to update
     *   }
     * })
     */
    upsert<T extends DetailUsersUpsertArgs>(args: SelectSubset<T, DetailUsersUpsertArgs<ExtArgs>>): Prisma__DetailUsersClient<$Result.GetResult<Prisma.$DetailUsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetailUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailUsersCountArgs} args - Arguments to filter DetailUsers to count.
     * @example
     * // Count the number of DetailUsers
     * const count = await prisma.detailUsers.count({
     *   where: {
     *     // ... the filter for the DetailUsers we want to count
     *   }
     * })
    **/
    count<T extends DetailUsersCountArgs>(
      args?: Subset<T, DetailUsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetailUsersAggregateArgs>(args: Subset<T, DetailUsersAggregateArgs>): Prisma.PrismaPromise<GetDetailUsersAggregateType<T>>

    /**
     * Group by DetailUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailUsersGroupByArgs} args - Group by arguments.
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
      T extends DetailUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailUsersGroupByArgs['orderBy'] }
        : { orderBy?: DetailUsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetailUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetailUsers model
   */
  readonly fields: DetailUsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetailUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetailUsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DetailUsers model
   */
  interface DetailUsersFieldRefs {
    readonly Id: FieldRef<"DetailUsers", 'String'>
    readonly UserId: FieldRef<"DetailUsers", 'String'>
    readonly NIK: FieldRef<"DetailUsers", 'String'>
    readonly Name: FieldRef<"DetailUsers", 'String'>
    readonly Departement: FieldRef<"DetailUsers", 'String'>
    readonly Divisi: FieldRef<"DetailUsers", 'String'>
    readonly Address: FieldRef<"DetailUsers", 'String'>
    readonly NoTlp: FieldRef<"DetailUsers", 'String'>
    readonly LocationCode: FieldRef<"DetailUsers", 'String'>
    readonly StatusKaryawan: FieldRef<"DetailUsers", 'StatusKaryawan'>
    readonly Status: FieldRef<"DetailUsers", 'Status'>
    readonly CreatedBy: FieldRef<"DetailUsers", 'String'>
    readonly CreatedAt: FieldRef<"DetailUsers", 'DateTime'>
    readonly UpdatedAt: FieldRef<"DetailUsers", 'DateTime'>
    readonly UpdatedBy: FieldRef<"DetailUsers", 'String'>
    readonly DeletedAt: FieldRef<"DetailUsers", 'DateTime'>
    readonly DeletedBy: FieldRef<"DetailUsers", 'String'>
    readonly Record: FieldRef<"DetailUsers", 'Record'>
  }
    

  // Custom InputTypes
  /**
   * DetailUsers findUnique
   */
  export type DetailUsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailUsers
     */
    select?: DetailUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailUsers
     */
    omit?: DetailUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailUsersInclude<ExtArgs> | null
    /**
     * Filter, which DetailUsers to fetch.
     */
    where: DetailUsersWhereUniqueInput
  }

  /**
   * DetailUsers findUniqueOrThrow
   */
  export type DetailUsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailUsers
     */
    select?: DetailUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailUsers
     */
    omit?: DetailUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailUsersInclude<ExtArgs> | null
    /**
     * Filter, which DetailUsers to fetch.
     */
    where: DetailUsersWhereUniqueInput
  }

  /**
   * DetailUsers findFirst
   */
  export type DetailUsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailUsers
     */
    select?: DetailUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailUsers
     */
    omit?: DetailUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailUsersInclude<ExtArgs> | null
    /**
     * Filter, which DetailUsers to fetch.
     */
    where?: DetailUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailUsers to fetch.
     */
    orderBy?: DetailUsersOrderByWithRelationInput | DetailUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailUsers.
     */
    cursor?: DetailUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailUsers.
     */
    distinct?: DetailUsersScalarFieldEnum | DetailUsersScalarFieldEnum[]
  }

  /**
   * DetailUsers findFirstOrThrow
   */
  export type DetailUsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailUsers
     */
    select?: DetailUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailUsers
     */
    omit?: DetailUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailUsersInclude<ExtArgs> | null
    /**
     * Filter, which DetailUsers to fetch.
     */
    where?: DetailUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailUsers to fetch.
     */
    orderBy?: DetailUsersOrderByWithRelationInput | DetailUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailUsers.
     */
    cursor?: DetailUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailUsers.
     */
    distinct?: DetailUsersScalarFieldEnum | DetailUsersScalarFieldEnum[]
  }

  /**
   * DetailUsers findMany
   */
  export type DetailUsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailUsers
     */
    select?: DetailUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailUsers
     */
    omit?: DetailUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailUsersInclude<ExtArgs> | null
    /**
     * Filter, which DetailUsers to fetch.
     */
    where?: DetailUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailUsers to fetch.
     */
    orderBy?: DetailUsersOrderByWithRelationInput | DetailUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetailUsers.
     */
    cursor?: DetailUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailUsers.
     */
    skip?: number
    distinct?: DetailUsersScalarFieldEnum | DetailUsersScalarFieldEnum[]
  }

  /**
   * DetailUsers create
   */
  export type DetailUsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailUsers
     */
    select?: DetailUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailUsers
     */
    omit?: DetailUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailUsersInclude<ExtArgs> | null
    /**
     * The data needed to create a DetailUsers.
     */
    data: XOR<DetailUsersCreateInput, DetailUsersUncheckedCreateInput>
  }

  /**
   * DetailUsers createMany
   */
  export type DetailUsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetailUsers.
     */
    data: DetailUsersCreateManyInput | DetailUsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetailUsers update
   */
  export type DetailUsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailUsers
     */
    select?: DetailUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailUsers
     */
    omit?: DetailUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailUsersInclude<ExtArgs> | null
    /**
     * The data needed to update a DetailUsers.
     */
    data: XOR<DetailUsersUpdateInput, DetailUsersUncheckedUpdateInput>
    /**
     * Choose, which DetailUsers to update.
     */
    where: DetailUsersWhereUniqueInput
  }

  /**
   * DetailUsers updateMany
   */
  export type DetailUsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetailUsers.
     */
    data: XOR<DetailUsersUpdateManyMutationInput, DetailUsersUncheckedUpdateManyInput>
    /**
     * Filter which DetailUsers to update
     */
    where?: DetailUsersWhereInput
    /**
     * Limit how many DetailUsers to update.
     */
    limit?: number
  }

  /**
   * DetailUsers upsert
   */
  export type DetailUsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailUsers
     */
    select?: DetailUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailUsers
     */
    omit?: DetailUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailUsersInclude<ExtArgs> | null
    /**
     * The filter to search for the DetailUsers to update in case it exists.
     */
    where: DetailUsersWhereUniqueInput
    /**
     * In case the DetailUsers found by the `where` argument doesn't exist, create a new DetailUsers with this data.
     */
    create: XOR<DetailUsersCreateInput, DetailUsersUncheckedCreateInput>
    /**
     * In case the DetailUsers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailUsersUpdateInput, DetailUsersUncheckedUpdateInput>
  }

  /**
   * DetailUsers delete
   */
  export type DetailUsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailUsers
     */
    select?: DetailUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailUsers
     */
    omit?: DetailUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailUsersInclude<ExtArgs> | null
    /**
     * Filter which DetailUsers to delete.
     */
    where: DetailUsersWhereUniqueInput
  }

  /**
   * DetailUsers deleteMany
   */
  export type DetailUsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailUsers to delete
     */
    where?: DetailUsersWhereInput
    /**
     * Limit how many DetailUsers to delete.
     */
    limit?: number
  }

  /**
   * DetailUsers without action
   */
  export type DetailUsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailUsers
     */
    select?: DetailUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailUsers
     */
    omit?: DetailUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailUsersInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    Id: number | null
    Duration: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    Id: number | null
    Duration: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    Id: number | null
    UserId: string | null
    Date: Date | null
    InTime: Date | null
    OutTime: Date | null
    LocationCode: string | null
    LocationName: string | null
    Address: string | null
    Fullname: string | null
    Duration: number | null
    pathIn: string | null
    pathOut: string | null
    Status: $Enums.StatusAttendance | null
    Description: string | null
    CreatedAt: Date | null
    CreatedBy: string | null
    UpdatedAt: Date | null
    UpdatedBy: string | null
  }

  export type AttendanceMaxAggregateOutputType = {
    Id: number | null
    UserId: string | null
    Date: Date | null
    InTime: Date | null
    OutTime: Date | null
    LocationCode: string | null
    LocationName: string | null
    Address: string | null
    Fullname: string | null
    Duration: number | null
    pathIn: string | null
    pathOut: string | null
    Status: $Enums.StatusAttendance | null
    Description: string | null
    CreatedAt: Date | null
    CreatedBy: string | null
    UpdatedAt: Date | null
    UpdatedBy: string | null
  }

  export type AttendanceCountAggregateOutputType = {
    Id: number
    UserId: number
    Date: number
    InTime: number
    OutTime: number
    LocationCode: number
    LocationName: number
    Address: number
    Fullname: number
    Duration: number
    pathIn: number
    pathOut: number
    Status: number
    Description: number
    CreatedAt: number
    CreatedBy: number
    UpdatedAt: number
    UpdatedBy: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    Id?: true
    Duration?: true
  }

  export type AttendanceSumAggregateInputType = {
    Id?: true
    Duration?: true
  }

  export type AttendanceMinAggregateInputType = {
    Id?: true
    UserId?: true
    Date?: true
    InTime?: true
    OutTime?: true
    LocationCode?: true
    LocationName?: true
    Address?: true
    Fullname?: true
    Duration?: true
    pathIn?: true
    pathOut?: true
    Status?: true
    Description?: true
    CreatedAt?: true
    CreatedBy?: true
    UpdatedAt?: true
    UpdatedBy?: true
  }

  export type AttendanceMaxAggregateInputType = {
    Id?: true
    UserId?: true
    Date?: true
    InTime?: true
    OutTime?: true
    LocationCode?: true
    LocationName?: true
    Address?: true
    Fullname?: true
    Duration?: true
    pathIn?: true
    pathOut?: true
    Status?: true
    Description?: true
    CreatedAt?: true
    CreatedBy?: true
    UpdatedAt?: true
    UpdatedBy?: true
  }

  export type AttendanceCountAggregateInputType = {
    Id?: true
    UserId?: true
    Date?: true
    InTime?: true
    OutTime?: true
    LocationCode?: true
    LocationName?: true
    Address?: true
    Fullname?: true
    Duration?: true
    pathIn?: true
    pathOut?: true
    Status?: true
    Description?: true
    CreatedAt?: true
    CreatedBy?: true
    UpdatedAt?: true
    UpdatedBy?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    Id: number
    UserId: string
    Date: Date
    InTime: Date
    OutTime: Date | null
    LocationCode: string
    LocationName: string
    Address: string
    Fullname: string
    Duration: number
    pathIn: string | null
    pathOut: string | null
    Status: $Enums.StatusAttendance
    Description: string
    CreatedAt: Date
    CreatedBy: string
    UpdatedAt: Date
    UpdatedBy: string | null
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    UserId?: boolean
    Date?: boolean
    InTime?: boolean
    OutTime?: boolean
    LocationCode?: boolean
    LocationName?: boolean
    Address?: boolean
    Fullname?: boolean
    Duration?: boolean
    pathIn?: boolean
    pathOut?: boolean
    Status?: boolean
    Description?: boolean
    CreatedAt?: boolean
    CreatedBy?: boolean
    UpdatedAt?: boolean
    UpdatedBy?: boolean
  }, ExtArgs["result"]["attendance"]>



  export type AttendanceSelectScalar = {
    Id?: boolean
    UserId?: boolean
    Date?: boolean
    InTime?: boolean
    OutTime?: boolean
    LocationCode?: boolean
    LocationName?: boolean
    Address?: boolean
    Fullname?: boolean
    Duration?: boolean
    pathIn?: boolean
    pathOut?: boolean
    Status?: boolean
    Description?: boolean
    CreatedAt?: boolean
    CreatedBy?: boolean
    UpdatedAt?: boolean
    UpdatedBy?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "UserId" | "Date" | "InTime" | "OutTime" | "LocationCode" | "LocationName" | "Address" | "Fullname" | "Duration" | "pathIn" | "pathOut" | "Status" | "Description" | "CreatedAt" | "CreatedBy" | "UpdatedAt" | "UpdatedBy", ExtArgs["result"]["attendance"]>

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      UserId: string
      Date: Date
      InTime: Date
      OutTime: Date | null
      LocationCode: string
      LocationName: string
      Address: string
      Fullname: string
      Duration: number
      pathIn: string | null
      pathOut: string | null
      Status: $Enums.StatusAttendance
      Description: string
      CreatedAt: Date
      CreatedBy: string
      UpdatedAt: Date
      UpdatedBy: string | null
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly Id: FieldRef<"Attendance", 'Int'>
    readonly UserId: FieldRef<"Attendance", 'String'>
    readonly Date: FieldRef<"Attendance", 'DateTime'>
    readonly InTime: FieldRef<"Attendance", 'DateTime'>
    readonly OutTime: FieldRef<"Attendance", 'DateTime'>
    readonly LocationCode: FieldRef<"Attendance", 'String'>
    readonly LocationName: FieldRef<"Attendance", 'String'>
    readonly Address: FieldRef<"Attendance", 'String'>
    readonly Fullname: FieldRef<"Attendance", 'String'>
    readonly Duration: FieldRef<"Attendance", 'Int'>
    readonly pathIn: FieldRef<"Attendance", 'String'>
    readonly pathOut: FieldRef<"Attendance", 'String'>
    readonly Status: FieldRef<"Attendance", 'StatusAttendance'>
    readonly Description: FieldRef<"Attendance", 'String'>
    readonly CreatedAt: FieldRef<"Attendance", 'DateTime'>
    readonly CreatedBy: FieldRef<"Attendance", 'String'>
    readonly UpdatedAt: FieldRef<"Attendance", 'DateTime'>
    readonly UpdatedBy: FieldRef<"Attendance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    Id: 'Id',
    Username: 'Username',
    Email: 'Email',
    Password: 'Password',
    RoleId: 'RoleId',
    CreatedAt: 'CreatedAt',
    CreatedBy: 'CreatedBy',
    UpdatedAt: 'UpdatedAt',
    UpdatedBy: 'UpdatedBy',
    DeletedAt: 'DeletedAt',
    DeletedBy: 'DeletedBy',
    LastLogin: 'LastLogin',
    Record: 'Record'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const DetailUsersScalarFieldEnum: {
    Id: 'Id',
    UserId: 'UserId',
    NIK: 'NIK',
    Name: 'Name',
    Departement: 'Departement',
    Divisi: 'Divisi',
    Address: 'Address',
    NoTlp: 'NoTlp',
    LocationCode: 'LocationCode',
    StatusKaryawan: 'StatusKaryawan',
    Status: 'Status',
    CreatedBy: 'CreatedBy',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt',
    UpdatedBy: 'UpdatedBy',
    DeletedAt: 'DeletedAt',
    DeletedBy: 'DeletedBy',
    Record: 'Record'
  };

  export type DetailUsersScalarFieldEnum = (typeof DetailUsersScalarFieldEnum)[keyof typeof DetailUsersScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    Id: 'Id',
    UserId: 'UserId',
    Date: 'Date',
    InTime: 'InTime',
    OutTime: 'OutTime',
    LocationCode: 'LocationCode',
    LocationName: 'LocationName',
    Address: 'Address',
    Fullname: 'Fullname',
    Duration: 'Duration',
    pathIn: 'pathIn',
    pathOut: 'pathOut',
    Status: 'Status',
    Description: 'Description',
    CreatedAt: 'CreatedAt',
    CreatedBy: 'CreatedBy',
    UpdatedAt: 'UpdatedAt',
    UpdatedBy: 'UpdatedBy'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


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


  export const UsersOrderByRelevanceFieldEnum: {
    Id: 'Id',
    Username: 'Username',
    Email: 'Email',
    Password: 'Password',
    CreatedBy: 'CreatedBy',
    UpdatedBy: 'UpdatedBy',
    DeletedBy: 'DeletedBy'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const RoleOrderByRelevanceFieldEnum: {
    Name: 'Name'
  };

  export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum]


  export const DetailUsersOrderByRelevanceFieldEnum: {
    Id: 'Id',
    UserId: 'UserId',
    NIK: 'NIK',
    Name: 'Name',
    Departement: 'Departement',
    Divisi: 'Divisi',
    Address: 'Address',
    NoTlp: 'NoTlp',
    LocationCode: 'LocationCode',
    CreatedBy: 'CreatedBy',
    UpdatedBy: 'UpdatedBy',
    DeletedBy: 'DeletedBy'
  };

  export type DetailUsersOrderByRelevanceFieldEnum = (typeof DetailUsersOrderByRelevanceFieldEnum)[keyof typeof DetailUsersOrderByRelevanceFieldEnum]


  export const AttendanceOrderByRelevanceFieldEnum: {
    UserId: 'UserId',
    LocationCode: 'LocationCode',
    LocationName: 'LocationName',
    Address: 'Address',
    Fullname: 'Fullname',
    pathIn: 'pathIn',
    pathOut: 'pathOut',
    Description: 'Description',
    CreatedBy: 'CreatedBy',
    UpdatedBy: 'UpdatedBy'
  };

  export type AttendanceOrderByRelevanceFieldEnum = (typeof AttendanceOrderByRelevanceFieldEnum)[keyof typeof AttendanceOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Record'
   */
  export type EnumRecordFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Record'>
    


  /**
   * Reference to a field of type 'StatusKaryawan'
   */
  export type EnumStatusKaryawanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusKaryawan'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'StatusAttendance'
   */
  export type EnumStatusAttendanceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAttendance'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    Id?: StringFilter<"Users"> | string
    Username?: StringFilter<"Users"> | string
    Email?: StringFilter<"Users"> | string
    Password?: StringFilter<"Users"> | string
    RoleId?: IntFilter<"Users"> | number
    CreatedAt?: DateTimeFilter<"Users"> | Date | string
    CreatedBy?: StringFilter<"Users"> | string
    UpdatedAt?: DateTimeFilter<"Users"> | Date | string
    UpdatedBy?: StringNullableFilter<"Users"> | string | null
    DeletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    DeletedBy?: StringNullableFilter<"Users"> | string | null
    LastLogin?: DateTimeNullableFilter<"Users"> | Date | string | null
    Record?: EnumRecordFilter<"Users"> | $Enums.Record
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    user?: DetailUsersListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    Id?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    RoleId?: SortOrder
    CreatedAt?: SortOrder
    CreatedBy?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrderInput | SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    DeletedBy?: SortOrderInput | SortOrder
    LastLogin?: SortOrderInput | SortOrder
    Record?: SortOrder
    role?: RoleOrderByWithRelationInput
    user?: DetailUsersOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    Username?: string
    Email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    Password?: StringFilter<"Users"> | string
    RoleId?: IntFilter<"Users"> | number
    CreatedAt?: DateTimeFilter<"Users"> | Date | string
    CreatedBy?: StringFilter<"Users"> | string
    UpdatedAt?: DateTimeFilter<"Users"> | Date | string
    UpdatedBy?: StringNullableFilter<"Users"> | string | null
    DeletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    DeletedBy?: StringNullableFilter<"Users"> | string | null
    LastLogin?: DateTimeNullableFilter<"Users"> | Date | string | null
    Record?: EnumRecordFilter<"Users"> | $Enums.Record
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    user?: DetailUsersListRelationFilter
  }, "Id" | "Username" | "Email">

  export type UsersOrderByWithAggregationInput = {
    Id?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    RoleId?: SortOrder
    CreatedAt?: SortOrder
    CreatedBy?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrderInput | SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    DeletedBy?: SortOrderInput | SortOrder
    LastLogin?: SortOrderInput | SortOrder
    Record?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"Users"> | string
    Username?: StringWithAggregatesFilter<"Users"> | string
    Email?: StringWithAggregatesFilter<"Users"> | string
    Password?: StringWithAggregatesFilter<"Users"> | string
    RoleId?: IntWithAggregatesFilter<"Users"> | number
    CreatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    CreatedBy?: StringWithAggregatesFilter<"Users"> | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    UpdatedBy?: StringNullableWithAggregatesFilter<"Users"> | string | null
    DeletedAt?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    DeletedBy?: StringNullableWithAggregatesFilter<"Users"> | string | null
    LastLogin?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    Record?: EnumRecordWithAggregatesFilter<"Users"> | $Enums.Record
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    Id?: IntFilter<"Role"> | number
    Name?: StringFilter<"Role"> | string
    CreatedAt?: DateTimeFilter<"Role"> | Date | string
    UpdatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UsersListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    users?: UsersOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    Name?: StringFilter<"Role"> | string
    CreatedAt?: DateTimeFilter<"Role"> | Date | string
    UpdatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UsersListRelationFilter
  }, "Id">

  export type RoleOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Role"> | number
    Name?: StringWithAggregatesFilter<"Role"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type DetailUsersWhereInput = {
    AND?: DetailUsersWhereInput | DetailUsersWhereInput[]
    OR?: DetailUsersWhereInput[]
    NOT?: DetailUsersWhereInput | DetailUsersWhereInput[]
    Id?: StringFilter<"DetailUsers"> | string
    UserId?: StringFilter<"DetailUsers"> | string
    NIK?: StringFilter<"DetailUsers"> | string
    Name?: StringFilter<"DetailUsers"> | string
    Departement?: StringFilter<"DetailUsers"> | string
    Divisi?: StringFilter<"DetailUsers"> | string
    Address?: StringNullableFilter<"DetailUsers"> | string | null
    NoTlp?: StringNullableFilter<"DetailUsers"> | string | null
    LocationCode?: StringNullableFilter<"DetailUsers"> | string | null
    StatusKaryawan?: EnumStatusKaryawanFilter<"DetailUsers"> | $Enums.StatusKaryawan
    Status?: EnumStatusFilter<"DetailUsers"> | $Enums.Status
    CreatedBy?: StringFilter<"DetailUsers"> | string
    CreatedAt?: DateTimeFilter<"DetailUsers"> | Date | string
    UpdatedAt?: DateTimeFilter<"DetailUsers"> | Date | string
    UpdatedBy?: StringNullableFilter<"DetailUsers"> | string | null
    DeletedAt?: DateTimeNullableFilter<"DetailUsers"> | Date | string | null
    DeletedBy?: StringNullableFilter<"DetailUsers"> | string | null
    Record?: EnumRecordFilter<"DetailUsers"> | $Enums.Record
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type DetailUsersOrderByWithRelationInput = {
    Id?: SortOrder
    UserId?: SortOrder
    NIK?: SortOrder
    Name?: SortOrder
    Departement?: SortOrder
    Divisi?: SortOrder
    Address?: SortOrderInput | SortOrder
    NoTlp?: SortOrderInput | SortOrder
    LocationCode?: SortOrderInput | SortOrder
    StatusKaryawan?: SortOrder
    Status?: SortOrder
    CreatedBy?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrderInput | SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    DeletedBy?: SortOrderInput | SortOrder
    Record?: SortOrder
    user?: UsersOrderByWithRelationInput
    _relevance?: DetailUsersOrderByRelevanceInput
  }

  export type DetailUsersWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: DetailUsersWhereInput | DetailUsersWhereInput[]
    OR?: DetailUsersWhereInput[]
    NOT?: DetailUsersWhereInput | DetailUsersWhereInput[]
    UserId?: StringFilter<"DetailUsers"> | string
    NIK?: StringFilter<"DetailUsers"> | string
    Name?: StringFilter<"DetailUsers"> | string
    Departement?: StringFilter<"DetailUsers"> | string
    Divisi?: StringFilter<"DetailUsers"> | string
    Address?: StringNullableFilter<"DetailUsers"> | string | null
    NoTlp?: StringNullableFilter<"DetailUsers"> | string | null
    LocationCode?: StringNullableFilter<"DetailUsers"> | string | null
    StatusKaryawan?: EnumStatusKaryawanFilter<"DetailUsers"> | $Enums.StatusKaryawan
    Status?: EnumStatusFilter<"DetailUsers"> | $Enums.Status
    CreatedBy?: StringFilter<"DetailUsers"> | string
    CreatedAt?: DateTimeFilter<"DetailUsers"> | Date | string
    UpdatedAt?: DateTimeFilter<"DetailUsers"> | Date | string
    UpdatedBy?: StringNullableFilter<"DetailUsers"> | string | null
    DeletedAt?: DateTimeNullableFilter<"DetailUsers"> | Date | string | null
    DeletedBy?: StringNullableFilter<"DetailUsers"> | string | null
    Record?: EnumRecordFilter<"DetailUsers"> | $Enums.Record
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "Id">

  export type DetailUsersOrderByWithAggregationInput = {
    Id?: SortOrder
    UserId?: SortOrder
    NIK?: SortOrder
    Name?: SortOrder
    Departement?: SortOrder
    Divisi?: SortOrder
    Address?: SortOrderInput | SortOrder
    NoTlp?: SortOrderInput | SortOrder
    LocationCode?: SortOrderInput | SortOrder
    StatusKaryawan?: SortOrder
    Status?: SortOrder
    CreatedBy?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrderInput | SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    DeletedBy?: SortOrderInput | SortOrder
    Record?: SortOrder
    _count?: DetailUsersCountOrderByAggregateInput
    _max?: DetailUsersMaxOrderByAggregateInput
    _min?: DetailUsersMinOrderByAggregateInput
  }

  export type DetailUsersScalarWhereWithAggregatesInput = {
    AND?: DetailUsersScalarWhereWithAggregatesInput | DetailUsersScalarWhereWithAggregatesInput[]
    OR?: DetailUsersScalarWhereWithAggregatesInput[]
    NOT?: DetailUsersScalarWhereWithAggregatesInput | DetailUsersScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"DetailUsers"> | string
    UserId?: StringWithAggregatesFilter<"DetailUsers"> | string
    NIK?: StringWithAggregatesFilter<"DetailUsers"> | string
    Name?: StringWithAggregatesFilter<"DetailUsers"> | string
    Departement?: StringWithAggregatesFilter<"DetailUsers"> | string
    Divisi?: StringWithAggregatesFilter<"DetailUsers"> | string
    Address?: StringNullableWithAggregatesFilter<"DetailUsers"> | string | null
    NoTlp?: StringNullableWithAggregatesFilter<"DetailUsers"> | string | null
    LocationCode?: StringNullableWithAggregatesFilter<"DetailUsers"> | string | null
    StatusKaryawan?: EnumStatusKaryawanWithAggregatesFilter<"DetailUsers"> | $Enums.StatusKaryawan
    Status?: EnumStatusWithAggregatesFilter<"DetailUsers"> | $Enums.Status
    CreatedBy?: StringWithAggregatesFilter<"DetailUsers"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"DetailUsers"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"DetailUsers"> | Date | string
    UpdatedBy?: StringNullableWithAggregatesFilter<"DetailUsers"> | string | null
    DeletedAt?: DateTimeNullableWithAggregatesFilter<"DetailUsers"> | Date | string | null
    DeletedBy?: StringNullableWithAggregatesFilter<"DetailUsers"> | string | null
    Record?: EnumRecordWithAggregatesFilter<"DetailUsers"> | $Enums.Record
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    Id?: IntFilter<"Attendance"> | number
    UserId?: StringFilter<"Attendance"> | string
    Date?: DateTimeFilter<"Attendance"> | Date | string
    InTime?: DateTimeFilter<"Attendance"> | Date | string
    OutTime?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    LocationCode?: StringFilter<"Attendance"> | string
    LocationName?: StringFilter<"Attendance"> | string
    Address?: StringFilter<"Attendance"> | string
    Fullname?: StringFilter<"Attendance"> | string
    Duration?: IntFilter<"Attendance"> | number
    pathIn?: StringNullableFilter<"Attendance"> | string | null
    pathOut?: StringNullableFilter<"Attendance"> | string | null
    Status?: EnumStatusAttendanceFilter<"Attendance"> | $Enums.StatusAttendance
    Description?: StringFilter<"Attendance"> | string
    CreatedAt?: DateTimeFilter<"Attendance"> | Date | string
    CreatedBy?: StringFilter<"Attendance"> | string
    UpdatedAt?: DateTimeFilter<"Attendance"> | Date | string
    UpdatedBy?: StringNullableFilter<"Attendance"> | string | null
  }

  export type AttendanceOrderByWithRelationInput = {
    Id?: SortOrder
    UserId?: SortOrder
    Date?: SortOrder
    InTime?: SortOrder
    OutTime?: SortOrderInput | SortOrder
    LocationCode?: SortOrder
    LocationName?: SortOrder
    Address?: SortOrder
    Fullname?: SortOrder
    Duration?: SortOrder
    pathIn?: SortOrderInput | SortOrder
    pathOut?: SortOrderInput | SortOrder
    Status?: SortOrder
    Description?: SortOrder
    CreatedAt?: SortOrder
    CreatedBy?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrderInput | SortOrder
    _relevance?: AttendanceOrderByRelevanceInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    UserId?: StringFilter<"Attendance"> | string
    Date?: DateTimeFilter<"Attendance"> | Date | string
    InTime?: DateTimeFilter<"Attendance"> | Date | string
    OutTime?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    LocationCode?: StringFilter<"Attendance"> | string
    LocationName?: StringFilter<"Attendance"> | string
    Address?: StringFilter<"Attendance"> | string
    Fullname?: StringFilter<"Attendance"> | string
    Duration?: IntFilter<"Attendance"> | number
    pathIn?: StringNullableFilter<"Attendance"> | string | null
    pathOut?: StringNullableFilter<"Attendance"> | string | null
    Status?: EnumStatusAttendanceFilter<"Attendance"> | $Enums.StatusAttendance
    Description?: StringFilter<"Attendance"> | string
    CreatedAt?: DateTimeFilter<"Attendance"> | Date | string
    CreatedBy?: StringFilter<"Attendance"> | string
    UpdatedAt?: DateTimeFilter<"Attendance"> | Date | string
    UpdatedBy?: StringNullableFilter<"Attendance"> | string | null
  }, "Id">

  export type AttendanceOrderByWithAggregationInput = {
    Id?: SortOrder
    UserId?: SortOrder
    Date?: SortOrder
    InTime?: SortOrder
    OutTime?: SortOrderInput | SortOrder
    LocationCode?: SortOrder
    LocationName?: SortOrder
    Address?: SortOrder
    Fullname?: SortOrder
    Duration?: SortOrder
    pathIn?: SortOrderInput | SortOrder
    pathOut?: SortOrderInput | SortOrder
    Status?: SortOrder
    Description?: SortOrder
    CreatedAt?: SortOrder
    CreatedBy?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrderInput | SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Attendance"> | number
    UserId?: StringWithAggregatesFilter<"Attendance"> | string
    Date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    InTime?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    OutTime?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    LocationCode?: StringWithAggregatesFilter<"Attendance"> | string
    LocationName?: StringWithAggregatesFilter<"Attendance"> | string
    Address?: StringWithAggregatesFilter<"Attendance"> | string
    Fullname?: StringWithAggregatesFilter<"Attendance"> | string
    Duration?: IntWithAggregatesFilter<"Attendance"> | number
    pathIn?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    pathOut?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    Status?: EnumStatusAttendanceWithAggregatesFilter<"Attendance"> | $Enums.StatusAttendance
    Description?: StringWithAggregatesFilter<"Attendance"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    CreatedBy?: StringWithAggregatesFilter<"Attendance"> | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    UpdatedBy?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
  }

  export type UsersCreateInput = {
    Id?: string
    Username: string
    Email: string
    Password: string
    CreatedAt?: Date | string
    CreatedBy: string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
    DeletedAt?: Date | string | null
    DeletedBy?: string | null
    LastLogin?: Date | string | null
    Record?: $Enums.Record
    role: RoleCreateNestedOneWithoutUsersInput
    user?: DetailUsersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    Id?: string
    Username: string
    Email: string
    Password: string
    RoleId: number
    CreatedAt?: Date | string
    CreatedBy: string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
    DeletedAt?: Date | string | null
    DeletedBy?: string | null
    LastLogin?: Date | string | null
    Record?: $Enums.Record
    user?: DetailUsersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Record?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    user?: DetailUsersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    RoleId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Record?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
    user?: DetailUsersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    Id?: string
    Username: string
    Email: string
    Password: string
    RoleId: number
    CreatedAt?: Date | string
    CreatedBy: string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
    DeletedAt?: Date | string | null
    DeletedBy?: string | null
    LastLogin?: Date | string | null
    Record?: $Enums.Record
  }

  export type UsersUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Record?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
  }

  export type UsersUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    RoleId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Record?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
  }

  export type RoleCreateInput = {
    Name: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    users?: UsersCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    Id?: number
    Name: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    users?: UsersUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    Id?: number
    Name: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailUsersCreateInput = {
    Id?: string
    NIK: string
    Name: string
    Departement: string
    Divisi: string
    Address?: string | null
    NoTlp?: string | null
    LocationCode?: string | null
    StatusKaryawan: $Enums.StatusKaryawan
    Status?: $Enums.Status
    CreatedBy: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
    DeletedAt?: Date | string | null
    DeletedBy?: string | null
    Record: $Enums.Record
    user: UsersCreateNestedOneWithoutUserInput
  }

  export type DetailUsersUncheckedCreateInput = {
    Id?: string
    UserId: string
    NIK: string
    Name: string
    Departement: string
    Divisi: string
    Address?: string | null
    NoTlp?: string | null
    LocationCode?: string | null
    StatusKaryawan: $Enums.StatusKaryawan
    Status?: $Enums.Status
    CreatedBy: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
    DeletedAt?: Date | string | null
    DeletedBy?: string | null
    Record: $Enums.Record
  }

  export type DetailUsersUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    NIK?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Departement?: StringFieldUpdateOperationsInput | string
    Divisi?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    NoTlp?: NullableStringFieldUpdateOperationsInput | string | null
    LocationCode?: NullableStringFieldUpdateOperationsInput | string | null
    StatusKaryawan?: EnumStatusKaryawanFieldUpdateOperationsInput | $Enums.StatusKaryawan
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedBy?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Record?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
    user?: UsersUpdateOneRequiredWithoutUserNestedInput
  }

  export type DetailUsersUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    UserId?: StringFieldUpdateOperationsInput | string
    NIK?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Departement?: StringFieldUpdateOperationsInput | string
    Divisi?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    NoTlp?: NullableStringFieldUpdateOperationsInput | string | null
    LocationCode?: NullableStringFieldUpdateOperationsInput | string | null
    StatusKaryawan?: EnumStatusKaryawanFieldUpdateOperationsInput | $Enums.StatusKaryawan
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedBy?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Record?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
  }

  export type DetailUsersCreateManyInput = {
    Id?: string
    UserId: string
    NIK: string
    Name: string
    Departement: string
    Divisi: string
    Address?: string | null
    NoTlp?: string | null
    LocationCode?: string | null
    StatusKaryawan: $Enums.StatusKaryawan
    Status?: $Enums.Status
    CreatedBy: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
    DeletedAt?: Date | string | null
    DeletedBy?: string | null
    Record: $Enums.Record
  }

  export type DetailUsersUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    NIK?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Departement?: StringFieldUpdateOperationsInput | string
    Divisi?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    NoTlp?: NullableStringFieldUpdateOperationsInput | string | null
    LocationCode?: NullableStringFieldUpdateOperationsInput | string | null
    StatusKaryawan?: EnumStatusKaryawanFieldUpdateOperationsInput | $Enums.StatusKaryawan
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedBy?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Record?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
  }

  export type DetailUsersUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    UserId?: StringFieldUpdateOperationsInput | string
    NIK?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Departement?: StringFieldUpdateOperationsInput | string
    Divisi?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    NoTlp?: NullableStringFieldUpdateOperationsInput | string | null
    LocationCode?: NullableStringFieldUpdateOperationsInput | string | null
    StatusKaryawan?: EnumStatusKaryawanFieldUpdateOperationsInput | $Enums.StatusKaryawan
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedBy?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Record?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
  }

  export type AttendanceCreateInput = {
    UserId: string
    Date: Date | string
    InTime: Date | string
    OutTime?: Date | string | null
    LocationCode: string
    LocationName: string
    Address: string
    Fullname: string
    Duration: number
    pathIn?: string | null
    pathOut?: string | null
    Status: $Enums.StatusAttendance
    Description: string
    CreatedAt?: Date | string
    CreatedBy: string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
  }

  export type AttendanceUncheckedCreateInput = {
    Id?: number
    UserId: string
    Date: Date | string
    InTime: Date | string
    OutTime?: Date | string | null
    LocationCode: string
    LocationName: string
    Address: string
    Fullname: string
    Duration: number
    pathIn?: string | null
    pathOut?: string | null
    Status: $Enums.StatusAttendance
    Description: string
    CreatedAt?: Date | string
    CreatedBy: string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
  }

  export type AttendanceUpdateInput = {
    UserId?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    InTime?: DateTimeFieldUpdateOperationsInput | Date | string
    OutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LocationCode?: StringFieldUpdateOperationsInput | string
    LocationName?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Duration?: IntFieldUpdateOperationsInput | number
    pathIn?: NullableStringFieldUpdateOperationsInput | string | null
    pathOut?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: EnumStatusAttendanceFieldUpdateOperationsInput | $Enums.StatusAttendance
    Description?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    UserId?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    InTime?: DateTimeFieldUpdateOperationsInput | Date | string
    OutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LocationCode?: StringFieldUpdateOperationsInput | string
    LocationName?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Duration?: IntFieldUpdateOperationsInput | number
    pathIn?: NullableStringFieldUpdateOperationsInput | string | null
    pathOut?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: EnumStatusAttendanceFieldUpdateOperationsInput | $Enums.StatusAttendance
    Description?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceCreateManyInput = {
    Id?: number
    UserId: string
    Date: Date | string
    InTime: Date | string
    OutTime?: Date | string | null
    LocationCode: string
    LocationName: string
    Address: string
    Fullname: string
    Duration: number
    pathIn?: string | null
    pathOut?: string | null
    Status: $Enums.StatusAttendance
    Description: string
    CreatedAt?: Date | string
    CreatedBy: string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
  }

  export type AttendanceUpdateManyMutationInput = {
    UserId?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    InTime?: DateTimeFieldUpdateOperationsInput | Date | string
    OutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LocationCode?: StringFieldUpdateOperationsInput | string
    LocationName?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Duration?: IntFieldUpdateOperationsInput | number
    pathIn?: NullableStringFieldUpdateOperationsInput | string | null
    pathOut?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: EnumStatusAttendanceFieldUpdateOperationsInput | $Enums.StatusAttendance
    Description?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    UserId?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    InTime?: DateTimeFieldUpdateOperationsInput | Date | string
    OutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LocationCode?: StringFieldUpdateOperationsInput | string
    LocationName?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Fullname?: StringFieldUpdateOperationsInput | string
    Duration?: IntFieldUpdateOperationsInput | number
    pathIn?: NullableStringFieldUpdateOperationsInput | string | null
    pathOut?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: EnumStatusAttendanceFieldUpdateOperationsInput | $Enums.StatusAttendance
    Description?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRecordFilter<$PrismaModel = never> = {
    equals?: $Enums.Record | EnumRecordFieldRefInput<$PrismaModel>
    in?: $Enums.Record[]
    notIn?: $Enums.Record[]
    not?: NestedEnumRecordFilter<$PrismaModel> | $Enums.Record
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type DetailUsersListRelationFilter = {
    every?: DetailUsersWhereInput
    some?: DetailUsersWhereInput
    none?: DetailUsersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DetailUsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    RoleId?: SortOrder
    CreatedAt?: SortOrder
    CreatedBy?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrder
    DeletedAt?: SortOrder
    DeletedBy?: SortOrder
    LastLogin?: SortOrder
    Record?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    RoleId?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    RoleId?: SortOrder
    CreatedAt?: SortOrder
    CreatedBy?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrder
    DeletedAt?: SortOrder
    DeletedBy?: SortOrder
    LastLogin?: SortOrder
    Record?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    RoleId?: SortOrder
    CreatedAt?: SortOrder
    CreatedBy?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrder
    DeletedAt?: SortOrder
    DeletedBy?: SortOrder
    LastLogin?: SortOrder
    Record?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    RoleId?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRecordWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Record | EnumRecordFieldRefInput<$PrismaModel>
    in?: $Enums.Record[]
    notIn?: $Enums.Record[]
    not?: NestedEnumRecordWithAggregatesFilter<$PrismaModel> | $Enums.Record
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordFilter<$PrismaModel>
    _max?: NestedEnumRecordFilter<$PrismaModel>
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelevanceInput = {
    fields: RoleOrderByRelevanceFieldEnum | RoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type EnumStatusKaryawanFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKaryawan | EnumStatusKaryawanFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKaryawan[]
    notIn?: $Enums.StatusKaryawan[]
    not?: NestedEnumStatusKaryawanFilter<$PrismaModel> | $Enums.StatusKaryawan
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type DetailUsersOrderByRelevanceInput = {
    fields: DetailUsersOrderByRelevanceFieldEnum | DetailUsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DetailUsersCountOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
    NIK?: SortOrder
    Name?: SortOrder
    Departement?: SortOrder
    Divisi?: SortOrder
    Address?: SortOrder
    NoTlp?: SortOrder
    LocationCode?: SortOrder
    StatusKaryawan?: SortOrder
    Status?: SortOrder
    CreatedBy?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrder
    DeletedAt?: SortOrder
    DeletedBy?: SortOrder
    Record?: SortOrder
  }

  export type DetailUsersMaxOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
    NIK?: SortOrder
    Name?: SortOrder
    Departement?: SortOrder
    Divisi?: SortOrder
    Address?: SortOrder
    NoTlp?: SortOrder
    LocationCode?: SortOrder
    StatusKaryawan?: SortOrder
    Status?: SortOrder
    CreatedBy?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrder
    DeletedAt?: SortOrder
    DeletedBy?: SortOrder
    Record?: SortOrder
  }

  export type DetailUsersMinOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
    NIK?: SortOrder
    Name?: SortOrder
    Departement?: SortOrder
    Divisi?: SortOrder
    Address?: SortOrder
    NoTlp?: SortOrder
    LocationCode?: SortOrder
    StatusKaryawan?: SortOrder
    Status?: SortOrder
    CreatedBy?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrder
    DeletedAt?: SortOrder
    DeletedBy?: SortOrder
    Record?: SortOrder
  }

  export type EnumStatusKaryawanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKaryawan | EnumStatusKaryawanFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKaryawan[]
    notIn?: $Enums.StatusKaryawan[]
    not?: NestedEnumStatusKaryawanWithAggregatesFilter<$PrismaModel> | $Enums.StatusKaryawan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKaryawanFilter<$PrismaModel>
    _max?: NestedEnumStatusKaryawanFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumStatusAttendanceFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAttendance | EnumStatusAttendanceFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAttendance[]
    notIn?: $Enums.StatusAttendance[]
    not?: NestedEnumStatusAttendanceFilter<$PrismaModel> | $Enums.StatusAttendance
  }

  export type AttendanceOrderByRelevanceInput = {
    fields: AttendanceOrderByRelevanceFieldEnum | AttendanceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AttendanceCountOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
    Date?: SortOrder
    InTime?: SortOrder
    OutTime?: SortOrder
    LocationCode?: SortOrder
    LocationName?: SortOrder
    Address?: SortOrder
    Fullname?: SortOrder
    Duration?: SortOrder
    pathIn?: SortOrder
    pathOut?: SortOrder
    Status?: SortOrder
    Description?: SortOrder
    CreatedAt?: SortOrder
    CreatedBy?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    Id?: SortOrder
    Duration?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
    Date?: SortOrder
    InTime?: SortOrder
    OutTime?: SortOrder
    LocationCode?: SortOrder
    LocationName?: SortOrder
    Address?: SortOrder
    Fullname?: SortOrder
    Duration?: SortOrder
    pathIn?: SortOrder
    pathOut?: SortOrder
    Status?: SortOrder
    Description?: SortOrder
    CreatedAt?: SortOrder
    CreatedBy?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
    Date?: SortOrder
    InTime?: SortOrder
    OutTime?: SortOrder
    LocationCode?: SortOrder
    LocationName?: SortOrder
    Address?: SortOrder
    Fullname?: SortOrder
    Duration?: SortOrder
    pathIn?: SortOrder
    pathOut?: SortOrder
    Status?: SortOrder
    Description?: SortOrder
    CreatedAt?: SortOrder
    CreatedBy?: SortOrder
    UpdatedAt?: SortOrder
    UpdatedBy?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    Id?: SortOrder
    Duration?: SortOrder
  }

  export type EnumStatusAttendanceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAttendance | EnumStatusAttendanceFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAttendance[]
    notIn?: $Enums.StatusAttendance[]
    not?: NestedEnumStatusAttendanceWithAggregatesFilter<$PrismaModel> | $Enums.StatusAttendance
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAttendanceFilter<$PrismaModel>
    _max?: NestedEnumStatusAttendanceFilter<$PrismaModel>
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type DetailUsersCreateNestedManyWithoutUserInput = {
    create?: XOR<DetailUsersCreateWithoutUserInput, DetailUsersUncheckedCreateWithoutUserInput> | DetailUsersCreateWithoutUserInput[] | DetailUsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DetailUsersCreateOrConnectWithoutUserInput | DetailUsersCreateOrConnectWithoutUserInput[]
    createMany?: DetailUsersCreateManyUserInputEnvelope
    connect?: DetailUsersWhereUniqueInput | DetailUsersWhereUniqueInput[]
  }

  export type DetailUsersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DetailUsersCreateWithoutUserInput, DetailUsersUncheckedCreateWithoutUserInput> | DetailUsersCreateWithoutUserInput[] | DetailUsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DetailUsersCreateOrConnectWithoutUserInput | DetailUsersCreateOrConnectWithoutUserInput[]
    createMany?: DetailUsersCreateManyUserInputEnvelope
    connect?: DetailUsersWhereUniqueInput | DetailUsersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRecordFieldUpdateOperationsInput = {
    set?: $Enums.Record
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type DetailUsersUpdateManyWithoutUserNestedInput = {
    create?: XOR<DetailUsersCreateWithoutUserInput, DetailUsersUncheckedCreateWithoutUserInput> | DetailUsersCreateWithoutUserInput[] | DetailUsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DetailUsersCreateOrConnectWithoutUserInput | DetailUsersCreateOrConnectWithoutUserInput[]
    upsert?: DetailUsersUpsertWithWhereUniqueWithoutUserInput | DetailUsersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DetailUsersCreateManyUserInputEnvelope
    set?: DetailUsersWhereUniqueInput | DetailUsersWhereUniqueInput[]
    disconnect?: DetailUsersWhereUniqueInput | DetailUsersWhereUniqueInput[]
    delete?: DetailUsersWhereUniqueInput | DetailUsersWhereUniqueInput[]
    connect?: DetailUsersWhereUniqueInput | DetailUsersWhereUniqueInput[]
    update?: DetailUsersUpdateWithWhereUniqueWithoutUserInput | DetailUsersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DetailUsersUpdateManyWithWhereWithoutUserInput | DetailUsersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DetailUsersScalarWhereInput | DetailUsersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DetailUsersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DetailUsersCreateWithoutUserInput, DetailUsersUncheckedCreateWithoutUserInput> | DetailUsersCreateWithoutUserInput[] | DetailUsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DetailUsersCreateOrConnectWithoutUserInput | DetailUsersCreateOrConnectWithoutUserInput[]
    upsert?: DetailUsersUpsertWithWhereUniqueWithoutUserInput | DetailUsersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DetailUsersCreateManyUserInputEnvelope
    set?: DetailUsersWhereUniqueInput | DetailUsersWhereUniqueInput[]
    disconnect?: DetailUsersWhereUniqueInput | DetailUsersWhereUniqueInput[]
    delete?: DetailUsersWhereUniqueInput | DetailUsersWhereUniqueInput[]
    connect?: DetailUsersWhereUniqueInput | DetailUsersWhereUniqueInput[]
    update?: DetailUsersUpdateWithWhereUniqueWithoutUserInput | DetailUsersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DetailUsersUpdateManyWithWhereWithoutUserInput | DetailUsersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DetailUsersScalarWhereInput | DetailUsersScalarWhereInput[]
  }

  export type UsersCreateNestedManyWithoutRoleInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRoleInput | UsersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRoleInput | UsersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRoleInput | UsersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRoleInput | UsersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRoleInput | UsersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRoleInput | UsersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutUserInput = {
    create?: XOR<UsersCreateWithoutUserInput, UsersUncheckedCreateWithoutUserInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumStatusKaryawanFieldUpdateOperationsInput = {
    set?: $Enums.StatusKaryawan
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UsersUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<UsersCreateWithoutUserInput, UsersUncheckedCreateWithoutUserInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserInput
    upsert?: UsersUpsertWithoutUserInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUserInput, UsersUpdateWithoutUserInput>, UsersUncheckedUpdateWithoutUserInput>
  }

  export type EnumStatusAttendanceFieldUpdateOperationsInput = {
    set?: $Enums.StatusAttendance
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRecordFilter<$PrismaModel = never> = {
    equals?: $Enums.Record | EnumRecordFieldRefInput<$PrismaModel>
    in?: $Enums.Record[]
    notIn?: $Enums.Record[]
    not?: NestedEnumRecordFilter<$PrismaModel> | $Enums.Record
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRecordWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Record | EnumRecordFieldRefInput<$PrismaModel>
    in?: $Enums.Record[]
    notIn?: $Enums.Record[]
    not?: NestedEnumRecordWithAggregatesFilter<$PrismaModel> | $Enums.Record
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordFilter<$PrismaModel>
    _max?: NestedEnumRecordFilter<$PrismaModel>
  }

  export type NestedEnumStatusKaryawanFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKaryawan | EnumStatusKaryawanFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKaryawan[]
    notIn?: $Enums.StatusKaryawan[]
    not?: NestedEnumStatusKaryawanFilter<$PrismaModel> | $Enums.StatusKaryawan
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusKaryawanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKaryawan | EnumStatusKaryawanFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKaryawan[]
    notIn?: $Enums.StatusKaryawan[]
    not?: NestedEnumStatusKaryawanWithAggregatesFilter<$PrismaModel> | $Enums.StatusKaryawan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKaryawanFilter<$PrismaModel>
    _max?: NestedEnumStatusKaryawanFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumStatusAttendanceFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAttendance | EnumStatusAttendanceFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAttendance[]
    notIn?: $Enums.StatusAttendance[]
    not?: NestedEnumStatusAttendanceFilter<$PrismaModel> | $Enums.StatusAttendance
  }

  export type NestedEnumStatusAttendanceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAttendance | EnumStatusAttendanceFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAttendance[]
    notIn?: $Enums.StatusAttendance[]
    not?: NestedEnumStatusAttendanceWithAggregatesFilter<$PrismaModel> | $Enums.StatusAttendance
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAttendanceFilter<$PrismaModel>
    _max?: NestedEnumStatusAttendanceFilter<$PrismaModel>
  }

  export type RoleCreateWithoutUsersInput = {
    Name: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    Id?: number
    Name: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type DetailUsersCreateWithoutUserInput = {
    Id?: string
    NIK: string
    Name: string
    Departement: string
    Divisi: string
    Address?: string | null
    NoTlp?: string | null
    LocationCode?: string | null
    StatusKaryawan: $Enums.StatusKaryawan
    Status?: $Enums.Status
    CreatedBy: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
    DeletedAt?: Date | string | null
    DeletedBy?: string | null
    Record: $Enums.Record
  }

  export type DetailUsersUncheckedCreateWithoutUserInput = {
    Id?: string
    NIK: string
    Name: string
    Departement: string
    Divisi: string
    Address?: string | null
    NoTlp?: string | null
    LocationCode?: string | null
    StatusKaryawan: $Enums.StatusKaryawan
    Status?: $Enums.Status
    CreatedBy: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
    DeletedAt?: Date | string | null
    DeletedBy?: string | null
    Record: $Enums.Record
  }

  export type DetailUsersCreateOrConnectWithoutUserInput = {
    where: DetailUsersWhereUniqueInput
    create: XOR<DetailUsersCreateWithoutUserInput, DetailUsersUncheckedCreateWithoutUserInput>
  }

  export type DetailUsersCreateManyUserInputEnvelope = {
    data: DetailUsersCreateManyUserInput | DetailUsersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailUsersUpsertWithWhereUniqueWithoutUserInput = {
    where: DetailUsersWhereUniqueInput
    update: XOR<DetailUsersUpdateWithoutUserInput, DetailUsersUncheckedUpdateWithoutUserInput>
    create: XOR<DetailUsersCreateWithoutUserInput, DetailUsersUncheckedCreateWithoutUserInput>
  }

  export type DetailUsersUpdateWithWhereUniqueWithoutUserInput = {
    where: DetailUsersWhereUniqueInput
    data: XOR<DetailUsersUpdateWithoutUserInput, DetailUsersUncheckedUpdateWithoutUserInput>
  }

  export type DetailUsersUpdateManyWithWhereWithoutUserInput = {
    where: DetailUsersScalarWhereInput
    data: XOR<DetailUsersUpdateManyMutationInput, DetailUsersUncheckedUpdateManyWithoutUserInput>
  }

  export type DetailUsersScalarWhereInput = {
    AND?: DetailUsersScalarWhereInput | DetailUsersScalarWhereInput[]
    OR?: DetailUsersScalarWhereInput[]
    NOT?: DetailUsersScalarWhereInput | DetailUsersScalarWhereInput[]
    Id?: StringFilter<"DetailUsers"> | string
    UserId?: StringFilter<"DetailUsers"> | string
    NIK?: StringFilter<"DetailUsers"> | string
    Name?: StringFilter<"DetailUsers"> | string
    Departement?: StringFilter<"DetailUsers"> | string
    Divisi?: StringFilter<"DetailUsers"> | string
    Address?: StringNullableFilter<"DetailUsers"> | string | null
    NoTlp?: StringNullableFilter<"DetailUsers"> | string | null
    LocationCode?: StringNullableFilter<"DetailUsers"> | string | null
    StatusKaryawan?: EnumStatusKaryawanFilter<"DetailUsers"> | $Enums.StatusKaryawan
    Status?: EnumStatusFilter<"DetailUsers"> | $Enums.Status
    CreatedBy?: StringFilter<"DetailUsers"> | string
    CreatedAt?: DateTimeFilter<"DetailUsers"> | Date | string
    UpdatedAt?: DateTimeFilter<"DetailUsers"> | Date | string
    UpdatedBy?: StringNullableFilter<"DetailUsers"> | string | null
    DeletedAt?: DateTimeNullableFilter<"DetailUsers"> | Date | string | null
    DeletedBy?: StringNullableFilter<"DetailUsers"> | string | null
    Record?: EnumRecordFilter<"DetailUsers"> | $Enums.Record
  }

  export type UsersCreateWithoutRoleInput = {
    Id?: string
    Username: string
    Email: string
    Password: string
    CreatedAt?: Date | string
    CreatedBy: string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
    DeletedAt?: Date | string | null
    DeletedBy?: string | null
    LastLogin?: Date | string | null
    Record?: $Enums.Record
    user?: DetailUsersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutRoleInput = {
    Id?: string
    Username: string
    Email: string
    Password: string
    CreatedAt?: Date | string
    CreatedBy: string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
    DeletedAt?: Date | string | null
    DeletedBy?: string | null
    LastLogin?: Date | string | null
    Record?: $Enums.Record
    user?: DetailUsersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutRoleInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput>
  }

  export type UsersCreateManyRoleInputEnvelope = {
    data: UsersCreateManyRoleInput | UsersCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutRoleInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutRoleInput, UsersUncheckedUpdateWithoutRoleInput>
    create: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutRoleInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutRoleInput, UsersUncheckedUpdateWithoutRoleInput>
  }

  export type UsersUpdateManyWithWhereWithoutRoleInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutRoleInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    Id?: StringFilter<"Users"> | string
    Username?: StringFilter<"Users"> | string
    Email?: StringFilter<"Users"> | string
    Password?: StringFilter<"Users"> | string
    RoleId?: IntFilter<"Users"> | number
    CreatedAt?: DateTimeFilter<"Users"> | Date | string
    CreatedBy?: StringFilter<"Users"> | string
    UpdatedAt?: DateTimeFilter<"Users"> | Date | string
    UpdatedBy?: StringNullableFilter<"Users"> | string | null
    DeletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    DeletedBy?: StringNullableFilter<"Users"> | string | null
    LastLogin?: DateTimeNullableFilter<"Users"> | Date | string | null
    Record?: EnumRecordFilter<"Users"> | $Enums.Record
  }

  export type UsersCreateWithoutUserInput = {
    Id?: string
    Username: string
    Email: string
    Password: string
    CreatedAt?: Date | string
    CreatedBy: string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
    DeletedAt?: Date | string | null
    DeletedBy?: string | null
    LastLogin?: Date | string | null
    Record?: $Enums.Record
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutUserInput = {
    Id?: string
    Username: string
    Email: string
    Password: string
    RoleId: number
    CreatedAt?: Date | string
    CreatedBy: string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
    DeletedAt?: Date | string | null
    DeletedBy?: string | null
    LastLogin?: Date | string | null
    Record?: $Enums.Record
  }

  export type UsersCreateOrConnectWithoutUserInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUserInput, UsersUncheckedCreateWithoutUserInput>
  }

  export type UsersUpsertWithoutUserInput = {
    update: XOR<UsersUpdateWithoutUserInput, UsersUncheckedUpdateWithoutUserInput>
    create: XOR<UsersCreateWithoutUserInput, UsersUncheckedCreateWithoutUserInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUserInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUserInput, UsersUncheckedUpdateWithoutUserInput>
  }

  export type UsersUpdateWithoutUserInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Record?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutUserInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    RoleId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Record?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
  }

  export type DetailUsersCreateManyUserInput = {
    Id?: string
    NIK: string
    Name: string
    Departement: string
    Divisi: string
    Address?: string | null
    NoTlp?: string | null
    LocationCode?: string | null
    StatusKaryawan: $Enums.StatusKaryawan
    Status?: $Enums.Status
    CreatedBy: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
    DeletedAt?: Date | string | null
    DeletedBy?: string | null
    Record: $Enums.Record
  }

  export type DetailUsersUpdateWithoutUserInput = {
    Id?: StringFieldUpdateOperationsInput | string
    NIK?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Departement?: StringFieldUpdateOperationsInput | string
    Divisi?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    NoTlp?: NullableStringFieldUpdateOperationsInput | string | null
    LocationCode?: NullableStringFieldUpdateOperationsInput | string | null
    StatusKaryawan?: EnumStatusKaryawanFieldUpdateOperationsInput | $Enums.StatusKaryawan
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedBy?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Record?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
  }

  export type DetailUsersUncheckedUpdateWithoutUserInput = {
    Id?: StringFieldUpdateOperationsInput | string
    NIK?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Departement?: StringFieldUpdateOperationsInput | string
    Divisi?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    NoTlp?: NullableStringFieldUpdateOperationsInput | string | null
    LocationCode?: NullableStringFieldUpdateOperationsInput | string | null
    StatusKaryawan?: EnumStatusKaryawanFieldUpdateOperationsInput | $Enums.StatusKaryawan
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedBy?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Record?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
  }

  export type DetailUsersUncheckedUpdateManyWithoutUserInput = {
    Id?: StringFieldUpdateOperationsInput | string
    NIK?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Departement?: StringFieldUpdateOperationsInput | string
    Divisi?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    NoTlp?: NullableStringFieldUpdateOperationsInput | string | null
    LocationCode?: NullableStringFieldUpdateOperationsInput | string | null
    StatusKaryawan?: EnumStatusKaryawanFieldUpdateOperationsInput | $Enums.StatusKaryawan
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedBy?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    Record?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
  }

  export type UsersCreateManyRoleInput = {
    Id?: string
    Username: string
    Email: string
    Password: string
    CreatedAt?: Date | string
    CreatedBy: string
    UpdatedAt?: Date | string
    UpdatedBy?: string | null
    DeletedAt?: Date | string | null
    DeletedBy?: string | null
    LastLogin?: Date | string | null
    Record?: $Enums.Record
  }

  export type UsersUpdateWithoutRoleInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Record?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
    user?: DetailUsersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutRoleInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Record?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
    user?: DetailUsersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutRoleInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Record?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
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