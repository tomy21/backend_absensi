
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.8.1
 * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
 */
Prisma.prismaVersion = {
  client: "6.8.1",
  engine: "2060c79ba17c6bb9f5823312b6f6b7f4a845738e"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Location_areaScalarFieldEnum = {
  id: 'id',
  location_code: 'location_code',
  location_name: 'location_name',
  KID: 'KID',
  Create_by: 'Create_by',
  Update_by: 'Update_by',
  created_at: 'created_at',
  updated_at: 'updated_at',
  address: 'address',
  coordinate: 'coordinate',
  minimum_point: 'minimum_point',
  region_coordinator: 'region_coordinator',
  category: 'category',
  vendor: 'vendor',
  region: 'region',
  total_lot: 'total_lot',
  total_lot_mobil: 'total_lot_mobil',
  total_lot_motor: 'total_lot_motor'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.location_areaOrderByRelevanceFieldEnum = {
  location_code: 'location_code',
  location_name: 'location_name',
  KID: 'KID',
  address: 'address',
  coordinate: 'coordinate',
  region_coordinator: 'region_coordinator'
};
exports.Category = exports.$Enums.Category = {
  APARTMENT: 'APARTMENT',
  RETAILS_MALLS: 'RETAILS_MALLS',
  RUKO_OFFICE: 'RUKO_OFFICE',
  OFFICE: 'OFFICE',
  HOSPITAL: 'HOSPITAL',
  EXTERNAL: 'EXTERNAL',
  OTHERS: 'OTHERS',
  SCHOOL_UNIVERSITY: 'SCHOOL_UNIVERSITY',
  NOT_SET: 'NOT_SET'
};

exports.Vendor = exports.$Enums.Vendor = {
  UNO: 'UNO',
  SKYNET: 'SKYNET',
  LIQUID: 'LIQUID',
  EZITAMA: 'EZITAMA'
};

exports.Region = exports.$Enums.Region = {
  Region_1: 'Region_1',
  Region_2: 'Region_2',
  Region_3: 'Region_3',
  Region_4: 'Region_4',
  Region_5: 'Region_5',
  Region_6: 'Region_6',
  Region_7: 'Region_7',
  Region_8: 'Region_8'
};

exports.Prisma.ModelName = {
  location_area: 'location_area'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\Project\\Backend_ts\\Absensi\\prisma\\generated\\client-secondary",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "E:\\Project\\Backend_ts\\Absensi\\prisma\\secondary\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../secondary",
  "clientVersion": "6.8.1",
  "engineVersion": "2060c79ba17c6bb9f5823312b6f6b7f4a845738e",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_SECONDARY",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/client-secondary\"\n}\n\ndatasource db {\n  provider = \"mysql\" // untuk MariaDB tetap pakai ini\n  url      = env(\"DATABASE_URL_SECONDARY\")\n}\n\nenum Category {\n  APARTMENT         @map(\"Apartment\")\n  RETAILS_MALLS     @map(\"Retails & Malls\")\n  RUKO_OFFICE       @map(\"Ruko & Office\")\n  OFFICE            @map(\"Office\")\n  HOSPITAL          @map(\"Hospital\")\n  EXTERNAL          @map(\"External\")\n  OTHERS            @map(\"Others\")\n  SCHOOL_UNIVERSITY @map(\"School / University\")\n  NOT_SET           @map(\"NOT SET\")\n}\n\nenum Vendor {\n  UNO\n  SKYNET\n  LIQUID\n  EZITAMA\n}\n\nenum Region {\n  Region_1 @map(\"REGION 1\")\n  Region_2 @map(\"REGION 2\")\n  Region_3 @map(\"REGION 3\")\n  Region_4 @map(\"REGION 4\")\n  Region_5 @map(\"REGION 5\")\n  Region_6 @map(\"REGION 6\")\n  Region_7 @map(\"REGION 7\")\n  Region_8 @map(\"REGION 8\")\n}\n\nmodel location_area {\n  id                 Int      @id @default(autoincrement())\n  location_code      String\n  location_name      String\n  KID                String\n  Create_by          Int\n  Update_by          Int?\n  created_at         DateTime @default(now())\n  updated_at         DateTime @updatedAt\n  address            String\n  coordinate         String\n  minimum_point      Int\n  region_coordinator String\n  category           Category\n  vendor             Vendor\n  region             Region\n  total_lot          Int?\n  total_lot_mobil    Int?\n  total_lot_motor    Int?\n}\n",
  "inlineSchemaHash": "e8d1fd652aef4b21a105dd86a31a6e8cbd477aed089e8f9b4088db5c3aee025d",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client-secondary",
    "generated/client-secondary",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"location_area\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"KID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coordinate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minimum_point\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_coordinator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Category\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vendor\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Region\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_lot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_lot_mobil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_lot_motor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Category\":{\"values\":[{\"name\":\"APARTMENT\",\"dbName\":\"Apartment\"},{\"name\":\"RETAILS_MALLS\",\"dbName\":\"Retails & Malls\"},{\"name\":\"RUKO_OFFICE\",\"dbName\":\"Ruko & Office\"},{\"name\":\"OFFICE\",\"dbName\":\"Office\"},{\"name\":\"HOSPITAL\",\"dbName\":\"Hospital\"},{\"name\":\"EXTERNAL\",\"dbName\":\"External\"},{\"name\":\"OTHERS\",\"dbName\":\"Others\"},{\"name\":\"SCHOOL_UNIVERSITY\",\"dbName\":\"School / University\"},{\"name\":\"NOT_SET\",\"dbName\":\"NOT SET\"}],\"dbName\":null},\"Vendor\":{\"values\":[{\"name\":\"UNO\",\"dbName\":null},{\"name\":\"SKYNET\",\"dbName\":null},{\"name\":\"LIQUID\",\"dbName\":null},{\"name\":\"EZITAMA\",\"dbName\":null}],\"dbName\":null},\"Region\":{\"values\":[{\"name\":\"Region_1\",\"dbName\":\"REGION 1\"},{\"name\":\"Region_2\",\"dbName\":\"REGION 2\"},{\"name\":\"Region_3\",\"dbName\":\"REGION 3\"},{\"name\":\"Region_4\",\"dbName\":\"REGION 4\"},{\"name\":\"Region_5\",\"dbName\":\"REGION 5\"},{\"name\":\"Region_6\",\"dbName\":\"REGION 6\"},{\"name\":\"Region_7\",\"dbName\":\"REGION 7\"},{\"name\":\"Region_8\",\"dbName\":\"REGION 8\"}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/client-secondary/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client-secondary/schema.prisma")
