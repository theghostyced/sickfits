const Mutation = {
  async createItem(parnet, args, ctx, info) {
    // TODO: Check if logged in

    console.log('CTX', ctx);
    const item = await ctx.db.mutation.createItem({
      data: { ...args }
    }, info);

    return item;
  }
};

module.exports = Mutation;
