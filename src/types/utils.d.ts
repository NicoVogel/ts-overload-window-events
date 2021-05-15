export type RequiredProp<BaseType, Prop extends keyof BaseType> = Omit<BaseType, Prop> & Required<Pick<BaseType, Prop>>;

type NotA<Type, ReservedNames> = Type extends ReservedNames ? never : Type;
type NotB<Type, ReservedNames> = ReservedNames extends Type ? never : Type;
export type ExcludeValues<Type, ReservedNames> = NotA<Type, ReservedNames> & NotB<Type, ReservedNames>;
