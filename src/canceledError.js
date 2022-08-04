/**
 * @class CanceledError
 * @classdesc A error class for Canceled Axios Request errors
 */

class CanceledError extends Error {
  constructor (message = 'Request has been canceled') {
    super(message)
    this.name = 'CanceledError'
  }
}

module.exports = CanceledError
