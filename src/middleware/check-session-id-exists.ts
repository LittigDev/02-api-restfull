import { FastifyRequest, FastifyReply } from 'fastify'

export async function chackSessionIdExists(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    return reply.status(401).send({
      message: 'Unauthorized.',
    })
  }
}
