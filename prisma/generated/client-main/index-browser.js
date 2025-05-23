
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
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

exports.Prisma.RoleScalarFieldEnum = {
  Id: 'Id',
  Name: 'Name',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.DetailUsersScalarFieldEnum = {
  Id: 'Id',
  UserId: 'UserId',
  NIK: 'NIK',
  KTPNo: 'KTPNo',
  Name: 'Name',
  Departement: 'Departement',
  Divisi: 'Divisi',
  Address: 'Address',
  DOB: 'DOB',
  NoTlp: 'NoTlp',
  LocationCode: 'LocationCode',
  Gender: 'Gender',
  StatusKaryawan: 'StatusKaryawan',
  JoinDate: 'JoinDate',
  ProfilePath: 'ProfilePath',
  Status: 'Status',
  CreatedBy: 'CreatedBy',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt',
  UpdatedBy: 'UpdatedBy',
  DeletedAt: 'DeletedAt',
  DeletedBy: 'DeletedBy',
  Record: 'Record'
};

exports.Prisma.AttendanceScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UsersOrderByRelevanceFieldEnum = {
  Id: 'Id',
  Username: 'Username',
  Email: 'Email',
  Password: 'Password',
  CreatedBy: 'CreatedBy',
  UpdatedBy: 'UpdatedBy',
  DeletedBy: 'DeletedBy'
};

exports.Prisma.RoleOrderByRelevanceFieldEnum = {
  Name: 'Name'
};

exports.Prisma.DetailUsersOrderByRelevanceFieldEnum = {
  Id: 'Id',
  UserId: 'UserId',
  NIK: 'NIK',
  KTPNo: 'KTPNo',
  Name: 'Name',
  Departement: 'Departement',
  Divisi: 'Divisi',
  Address: 'Address',
  NoTlp: 'NoTlp',
  LocationCode: 'LocationCode',
  ProfilePath: 'ProfilePath',
  CreatedBy: 'CreatedBy',
  UpdatedBy: 'UpdatedBy',
  DeletedBy: 'DeletedBy'
};

exports.Prisma.AttendanceOrderByRelevanceFieldEnum = {
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
exports.Record = exports.$Enums.Record = {
  Active: 'Active',
  Inactive: 'Inactive',
  Delete: 'Delete'
};

exports.Gender = exports.$Enums.Gender = {
  Pria: 'Pria',
  Perempuan: 'Perempuan'
};

exports.StatusKaryawan = exports.$Enums.StatusKaryawan = {
  InHouse: 'InHouse',
  DailyWorker: 'DailyWorker'
};

exports.Status = exports.$Enums.Status = {
  Active: 'Active',
  Inactive: 'Inactive',
  Waiting: 'Waiting'
};

exports.StatusAttendance = exports.$Enums.StatusAttendance = {
  Hadir: 'Hadir',
  Izin: 'Izin',
  Sakit: 'Sakit',
  Cuti: 'Cuti',
  Absen: 'Absen'
};

exports.Prisma.ModelName = {
  Users: 'Users',
  Role: 'Role',
  DetailUsers: 'DetailUsers',
  Attendance: 'Attendance'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
